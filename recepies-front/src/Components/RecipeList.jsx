import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipe data from the API
    axios.get('http://localhost:3000/api/recipes').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Recipe App</h1>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            {recipe.image && <img className="recipe-image" src={`http://localhost:3000${recipe.image}`} alt={recipe.name} />}
            <h2>{recipe.name}</h2>
            <button className="get-recipe-button">Get Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
