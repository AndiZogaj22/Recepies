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
          <div key={recipe._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={recipe.image} alt={recipe.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{recipe.name}</h2>
              <p>{recipe.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Recipe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
