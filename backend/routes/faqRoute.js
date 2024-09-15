const express = require('express');
const router = express.Router();
const FAQ = require('../models/faq');

// @route   GET /api/faqs
// @desc    Get all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/faqs/:id
// @desc    Get a specific FAQ by ID
router.get('/:id', async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/faqs
// @desc    Create a new FAQ
// router.post('/', async (req, res) => {
//   const { title, description } = req.body;
//   const newFAQ = new FAQ({ title, description });

//   try {
//     const savedFAQ = await newFAQ.save();
//     res.json(savedFAQ);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  console.log('Received data:', { title, description }); // Log received data

  const newFAQ = new FAQ({ title, description });

  try {
    const savedFAQ = await newFAQ.save();
    console.log('Saved FAQ:', savedFAQ); // Log saved FAQ
    res.json(savedFAQ);
  } catch (err) {
    console.error('Error saving FAQ:', err.message); // Log any errors
    res.status(400).json({ message: err.message });
  }
});

// @route   PUT /api/faqs/:id
// @desc    Update a FAQ by ID
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;

  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    if (!updatedFAQ) return res.status(404).json({ message: 'FAQ not found' });
    res.json(updatedFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/faqs/:id
// @desc    Delete a FAQ by ID
router.delete('/:id', async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
