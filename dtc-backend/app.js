const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./config/database');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Use auth routes
app.use('/api/auth', authRoutes);

// Synchronize models and start server
const startServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to sync database', error);
  }
};

startServer();
