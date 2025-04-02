import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Set appropriate CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    console.log('Form data received:', { name, email, subject, message });
    
    // Store in MongoDB
    let client = null;
    try {
      const uri = process.env.MONGODB_URI;
      
      if (!uri) {
        throw new Error('MongoDB connection string not provided');
      }
      
      const contactMessage = {
        name,
        email,
        subject,
        message,
        createdAt: new Date()
      };
      
      client = new MongoClient(uri, {
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000,
      });
      
      console.log('Connecting to MongoDB...');
      await client.connect();
      console.log('Connected successfully');
      
      const database = client.db('portfolio');
      const messagesCollection = database.collection('messages');
      
      const result = await messagesCollection.insertOne(contactMessage);
      console.log('Message saved with ID:', result.insertedId);
      
      return res.status(200).json({ 
        success: true,
        message: 'Your message has been received and stored successfully!',
        id: result.insertedId
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return res.status(500).json({ 
        success: false, 
        message: 'We received your message but had trouble storing it. Please try again later.'
      });
    } finally {
      if (client) {
        await client.close().catch(console.error);
      }
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'There was a problem processing your message. Please try again later.'
    });
  }
}
