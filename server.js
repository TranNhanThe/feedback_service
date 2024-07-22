const express = require('express');
const connectDB = require('./src/config/mongoose');
const userRoutes = require('./src/routes/userRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/p', feedbackRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
