// src/app.js
const express = require('express');
const itemRoutes = require('./routes/itemRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors'); 

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true, 
  }));
// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
