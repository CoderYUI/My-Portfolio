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

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(join(__dirname, 'dist')));

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let client;
  try {
    // Create a temporary contact object that gets stored locally
    const contact = {
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    };
    
    console.log('Contact message received:', contact);
    
    // Try MongoDB connection if URI is available
    if (uri) {
      try {
        client = new MongoClient(uri);
        await client.connect();
        const db = client.db('portfolio');
        const collection = db.collection('messages');
        
        const result = await collection.insertOne(contact);
        console.log('Message saved to MongoDB:', result.insertedId);
      } catch (mongoError) {
        console.error('MongoDB Error:', mongoError);
        // Continue with success response even if MongoDB fails
      }
    }
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  } finally {
    if (client) {
      await client.close().catch(console.error);
    }
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
