const express = require('express');
const setupMiddleware = require('../config/middleware');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();


const app = express();

setupMiddleware(app);

app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;
