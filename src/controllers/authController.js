const express = require('express');
const authService = require('../service/authService');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const user = await authService.loginUser(req.body.email, req.body.password);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
