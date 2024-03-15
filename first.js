const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./models/UserData'); // Import the UserData model
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://udaywasu:udaymongodb%40787%23@cluster0.lu8a3rn.mongodb.net/Chatbot?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define route to store user data
app.post('/storeUserData', async (req, res) => {
  const { ministry, department, problem, name, phone, email } = req.body;
  try {
    const userData = new UserData({ ministry, department, problem, name, phone, email });
    await userData.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error storing user data:', error);
    res.sendStatus(500);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});