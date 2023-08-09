const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;




// Connect to MongoDB
mongoose.connect('mongodb+srv://AndiMongo:wtfisthis123@andicluster.x3fpaon.mongodb.net/RecipesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create a Recipe schema and model
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  country: { type: String, required: true },
  image: { type: String, required: true },
  tutorial: { type: String, required: true }
}, { collection: 'RecipesCollection' }); // Specify the custom collection name

const Recipe = mongoose.model('RecipesDocument', recipeSchema); // Specify the custom model name

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(helmet()); // Use the helmet middleware to set headers

// Set Content Security Policy (CSP) header to allow fonts from 'localhost:3000'
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' data: localhost:3000;"
  );
  next();
});

// Route to get all recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Route to add a new recipe
app.post('/api/recipes', async (req, res) => {
  const { name, description, ingredients, country, image, tutorial } = req.body;
  if (!name || !description || !ingredients || !country || !image || !tutorial) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  try {
    const newRecipe = new Recipe({ name, description, ingredients, country, image, tutorial });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save the recipe.' });
  }
});

// Route to delete a recipe
app.delete('/api/recipes/:id', async (req, res) => {
  const recipeId = req.params.id;

  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found.' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the recipe.' });
  }
});

// Default route for the root path ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API! To get recipes, use /api/recipes endpoint.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
