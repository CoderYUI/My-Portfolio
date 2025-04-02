import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Set appropriate CORS headers for Vercel environment
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

    // Log the form data for troubleshooting
    console.log('Form data received:', { name, email, subject, message });
    
    // Store in MongoDB if available, but don't fail if DB connection fails
    try {
      // MongoDB connection string from environment variable
      const uri = process.env.MONGODB_URI;
      
      if (uri) {
        // Create a new contact message object
        const contactMessage = {
          name,
          email,
          subject,
          message,
          createdAt: new Date()
        };
        
        const client = new MongoClient(uri, {
          serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
          connectTimeoutMS: 10000 // 10 seconds connection timeout
        });
        
        await client.connect();
        const database = client.db('portfolio');
        const messagesCollection = database.collection('messages');
        
        await messagesCollection.insertOne(contactMessage);
        await client.close();
        
        console.log('Message saved to database successfully');
      }
    } catch (dbError) {
      // Log the error but don't fail the request
      console.error('Database error:', dbError.message);
      // Continue with successful response
    }
    
    // Always return success since we want form submission to work even if DB fails
    return res.status(200).json({ 
      success: true,
      message: 'Message received successfully. Thank you for contacting me!'
    });
    
  } catch (error) {
    // Log the full error
    console.error('Server error:', error);
    
    // Return a friendly error response
    return res.status(500).json({ 
      success: false, 
      message: 'There was a problem processing your message. Please try again later.'
    });
  }
}
