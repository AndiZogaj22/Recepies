import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the API
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-card-container">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe._id}>
          <img src={recipe.image} alt={recipe.name} />
          <h2>{recipe.name}</h2>
          {/* Add other recipe details here */}
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
