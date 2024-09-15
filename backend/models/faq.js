const mongoose = require('mongoose');

// Define the FAQ schema with title and description fields
const faqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create and export the FAQ model
const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
