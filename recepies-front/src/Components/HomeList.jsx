import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeList = ({ searchQuery, limit }) => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipe data from the API
    axios.get('http://localhost:3000/api/recipes').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  // Function to truncate the description text to a maximum of 100 characters
  const truncateDescription = (description) => {
    const maxLength = 100;
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  };

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Shuffle array using Fisher-Yates (Knuth) shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Get a limited number of random recipes
  const limitedRandomRecipes = shuffleArray(filteredRecipes).slice(0, limit);

  // Function to handle saving recipes to the MyRecipes component
  const saveRecipe = (recipe) => {
    setSavedRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <div>
      <div className="recipe-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {limitedRandomRecipes.map((recipe) => (
          <div key={recipe._id} className="card w-96 h-96 bg-base-100 shadow-xl pb-24" style={{ margin: '30px' }}>
            <figure className="px-10 pt-15" style={{ height: '50%' }}>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded-xl"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </figure>
            <div className="card-body items-center text-center" style={{ height: '50%' }}>
              <h2 className="card-title">{recipe.name}</h2>
              <h2 className="badge badge-outline p-3">{recipe.country}</h2>
              <p>{truncateDescription(recipe.description)}</p>
              <div className="card-actions">
                {/* Update the 'to' prop of Link to correctly navigate to the RecipeDetails page */}
                <Link to={`/totalrecipes/${recipe._id}`} state={{ recipe }}>
                  <button className="btn btn-outline btn-info">Details</button>
                </Link>
                {/* Pass the recipe data to the MyRecipes component */}
                <button className="btn btn-outline btn-warning" onClick={() => saveRecipe(recipe)}>
                  Save Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeList;
