import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'
const RecipeDetails = () => {
  const location = useLocation();

  // Check if 'recipe' exists in location.state, otherwise set it to null
  const recipe = location.state?.recipe || null;

  // If recipe is null or undefined, display an error message or redirect to a fallback page
  if (!recipe) {
    return <div className="text-center mt-8">Error: Recipe not found</div>; // You can return a more informative error message or use Redirect to redirect to a fallback page
  }

  return (
    <>
    <Navbar />
    <div className="max-w-xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
      <p className="text-gray-600 mb-4">{recipe.description}</p>
      <p className="text-gray-600">Country: {recipe.country}</p>
      <h3 className="text-xl font-semibold mt-6">Ingredients:</h3>
      <ul className="list-disc list-inside mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">{ingredient}</li>
        ))}
      </ul>
      <img src={recipe.image} alt={recipe.name} className="mt-6 rounded-lg shadow-xl" style={{ width: '100%', height: 'auto' }} />
      <p className="text-gray-600 mt-4">Tutorial: {recipe.tutorial}</p>
    </div>
    </>
  );
};

export default RecipeDetails;
