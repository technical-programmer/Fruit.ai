const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoute');
const chatbotRoutes=require('./routes/chatBot');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection 
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fruitai'; // Fallback to local MongoDB if no environment variable
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit process if connection fails
  }
};

// Call the database connection function
connectDB();

// Routes
app.use('/api/faqs', faqRoutes);
app.use('/api/chatbot', chatbotRoutes);
// app.use('/api/translateRoute',translatorRoute);


// Translation route
app.post('/api/translate', (req, res) => {
  const { text } = req.body;

  // Mock translation logic
  const translations = {
    'Hola': 'Hello',
    'Adiós': 'Goodbye',
    '¿Cómo estás?': 'How are you?',
    'Bonjour': 'Hello',
    'Au revoir': 'Goodbye',
    'Comment ça va?': 'How are you?',
    'Je m\'appelle Marie.': 'My name is Marie.'
  };

  const translatedText = translations[text] || 'Translation not available';

  res.json({ translatedText });
});
// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
