const express = require('express');
const { Role, Permission } = require('../models');
const authenticateToken = require('../middleware/auth');
const authorize = require('../middleware/authorize');

const router = express.Router();

// Create a new role
router.post('/roles', authenticateToken, authorize('create_role'), async (req, res) => {
  const { role_name, description } = req.body;
  const userId = req.user.id;

  try {
    const role = await Role.create({
      role_name,
      description,
      created_by: userId,
      updated_by: userId,
    });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create role' });
  }
});

// Get all roles
router.get('/roles', authenticateToken, async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve roles' });
  }
});

module.exports = router;
