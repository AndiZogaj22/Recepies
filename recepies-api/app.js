const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Temporary in-memory database (replace this with a real database for production)
let recipes = [];

// Middleware to parse JSON requests
app.use(express.json());

// Route to get all recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// Route to add a new recipe
app.post('/api/recipes', (req, res) => {
  const { name, description, ingredients, country } = req.body;
  if (!name || !description || !ingredients || !country) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }
  const newRecipe = { name, description, ingredients, country };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
