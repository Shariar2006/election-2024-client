const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Route handling
app.post('/api/user', (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required.' });
  }

  // Simulate saving user data to a database
  // In a real-world scenario, this would involve database interactions
  const user = { username, email };

  return res.status(201).json({ message: 'User created successfully', user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

