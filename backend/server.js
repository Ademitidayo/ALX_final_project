const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const gradeRoutes = require('./routes/gradeRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', gradeRoutes);

app.get('/', (req, res) => res.send('Welcome to the School Grading Platform'));

mongoose.set('strictQuery', true);
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('MONGO_URI environment variable is not defined');
  process.exit(1);  // Exit the process with an error code
}

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// Example route
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));