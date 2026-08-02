const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');
const Contact = require('../models/Contact');
const sendContactEmail = require('../utils/sendEmail');

router.post('/visitor', async (req, res) => {
  try {
    const { name, role, skipped } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const newVisitor = new Visitor({ name, role, skipped, ip });
    await newVisitor.save();
    res.status(201).json(newVisitor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/visitor', async (req, res) => {
  try {
    const visitors = await Visitor.find();
    
    const total = visitors.length;
    const skippedCount = visitors.filter(v => v.skipped).length;
    const roleStats = visitors.reduce((acc, v) => {
      if (v.role && v.role !== 'null') {
        acc[v.role] = (acc[v.role] || 0) + 1;
      }
      return acc;
    }, {});

    res.json({ total, skippedCount, roleStats, visitors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newContact = new Contact({ name: name.trim(), email: email.trim(), message: message.trim() });
    await newContact.save();
    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });

    res.status(201).json({ message: 'Message sent successfully!', contact: newContact });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: error.message || 'Failed to send message.' });
  }
});

router.get('/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Homes (Airbnb Clone)',
      description: 'A complete clone of Airbnb built with MERN stack allowing users to book homes.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      id: 2,
      title: 'GrocerFlow',
      description: 'A seamless grocery delivery platform with real-time updates and user cart.',
      tech: ['MERN', 'Redux', 'Stripe', 'Tailwind'],
      link: '#'
    },
    {
      id: 3,
      title: 'KrishiRakshak',
      description: 'A platform helping farmers monitor crop health and access crucial agricultural data.',
      tech: ['React', 'Python', 'Machine Learning', 'Node.js'],
      link: '#'
    }
  ]);
});


module.exports = router;
