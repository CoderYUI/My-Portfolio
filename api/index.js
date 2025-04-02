import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate form data
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // MongoDB connection string from environment variable
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error('Missing MongoDB connection string');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  let client = null;
  try {
    client = new MongoClient(uri);
    await client.connect();
    
    const database = client.db('portfolio');
    const messagesCollection = database.collection('messages');
    
    // Insert the new message
    const result = await messagesCollection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    });

    return res.status(200).json({ 
      message: 'Message sent successfully',
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ message: 'Error saving message to database' });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
