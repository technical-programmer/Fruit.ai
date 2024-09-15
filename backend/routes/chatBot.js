const express = require('express');
const router = express.Router();

// Mock data for fruits
const fruits = {
  apple: "An apple a day keeps the doctor away!",
  banana: "Bananas are rich in potassium.",
  orange: "Oranges are a great source of vitamin C.",
};

// Route to get all fruits
router.get('/fruits', (req, res) => {
  const fruitList = Object.keys(fruits).map(name => ({
    id: name,
    name,
    description: fruits[name],
  }));
  
  res.json(fruitList);
});

// Route to handle chatbot messages
router.post('/', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let responseMessage = "I'm sorry, I don't understand your question.";

  if (userMessage.includes("hello")) {
    responseMessage = "Hello! How can I assist you today?";
  } else if (userMessage.includes("fruit")) {
    responseMessage = "Fruit.ai is here to help you with health-related information.";
  } else {
    for (const fruit in fruits) {
      if (userMessage.includes(fruit)) {
        responseMessage = fruits[fruit];
        break;
      }
    }
  }
  res.json({ message: responseMessage });
});

module.exports = router;
