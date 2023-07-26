import React from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = () => {
  const location = useLocation();
  const { recipe } = location.state;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>Country: {recipe.country}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <img src={recipe.image} alt={recipe.name} />
      <p>Tutorial: {recipe.tutorial}</p>
    </div>
  );
};

export default RecipeDetails;
