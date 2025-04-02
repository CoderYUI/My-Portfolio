import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string
const uri = process.env.MONGODB_URI;

// Test MongoDB connection on startup
async function testMongoConnection() {
  if (!uri) {
    console.log('No MongoDB URI provided in environment variables');
    return;
  }
  
  let client;
  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('MongoDB connection successful');
    
    // Create database and collection if they don't exist
    const db = client.db('portfolio');
    await db.createCollection('messages');
    console.log('Database and collection ready');
    
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return false;
  } finally {
    if (client) {
      await client.close();
    }
  }
}

// Test connection at startup
testMongoConnection();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(join(__dirname, 'dist')));

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  let client;
  try {
    // Create a contact object
    const contact = {
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    };
    
    // Try MongoDB connection if URI is available
    if (uri) {
      try {
        client = new MongoClient(uri, {
          connectTimeoutMS: 30000,  // Increased timeout
          socketTimeoutMS: 30000,   // Increased timeout
        });
        
        await client.connect();
        console.log('Connected to MongoDB successfully');
        
        const db = client.db('portfolio');
        const collection = db.collection('messages');
        
        const result = await collection.insertOne(contact);
        console.log('Message saved to MongoDB with ID:', result.insertedId);

        // Return success response immediately after saving to MongoDB
        return res.status(201).json({ 
          success: true, 
          message: 'Message sent and saved to database successfully',
          id: result.insertedId
        });
      } catch (mongoError) {
        console.error('MongoDB Error:', mongoError);
        // Fall through to return a different response for database errors
      } finally {
        if (client) {
          await client.close().catch(console.error);
        }
      }
    }
    
    // This response is only reached if no URI or if there was a MongoDB error
    res.status(201).json({ 
      success: true, 
      message: 'Message received but could not be saved to database',
      stored: false
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error processing your request'
    });
  }
});

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
