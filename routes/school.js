const express = require('express');
const { School, Branch, User } = require('../models');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Create a new school
router.post('/schools', authenticateToken, async (req, res) => {
  const { school_name, address } = req.body;
  const userId = req.user.id; // The authenticated user's ID

  try {
    const school = await School.create({
      school_name,
      address,
      created_by: userId,
      updated_by: userId,
    });
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create school' });
  }
});

// Update a school
router.put('/schools/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { school_name, address } = req.body;
  const userId = req.user.id; // The authenticated user's ID

  try {
    const school = await School.findByPk(id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    school.school_name = school_name;
    school.address = address;
    school.updated_by = userId;
    await school.save();

    res.json(school);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update school' });
  }
});

// Get all schools
router.get('/schools', authenticateToken, async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve schools' });
  }
});

module.exports = router;
