import { MongoClient } from 'mongodb';

// Connection URI (replace with your MongoDB Atlas connection string)
const uri = "mongodb+srv://bhaskarojha2426:bhaskar@@cluster0.vlk9kut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate form data
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
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
    await client.close();
  }
}
