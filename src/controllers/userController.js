const express = require('express');
const userService = require('../service/userService');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
