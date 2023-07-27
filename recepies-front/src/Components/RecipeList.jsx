import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = ({ limit }) => {
  const [recipes, setRecipes] = useState([]);

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

  // Limit the number of recipes to be shown based on the 'limit' prop
  const limitedRecipes = recipes.slice(0, limit);

  return (
    <div>
      <div className="recipe-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {limitedRecipes.map((recipe, index) => (
          <div key={recipe._id} className="card w-96 h-96 bg-base-100 shadow-xl pb-24" style={{ margin: "30px" }}>
            <figure className="px-10 pt-15" style={{ height: "50%" }}>
              <img src={recipe.image} alt={recipe.name} className="rounded-xl" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </figure>
            <div className="card-body items-center text-center" style={{ height: "50%" }}>
              <h2 className="card-title">{recipe.name}</h2>
              <h2 className="badge badge-outline p-3">{recipe.country}</h2>
              <p>{truncateDescription(recipe.description)}</p>
              <div className="card-actions">
                <Link to={{ pathname: `/totalrecipes/${recipe._id}`, state: { recipe } }}>
                  <button className="btn btn-outline btn-info">Get Recipe</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
