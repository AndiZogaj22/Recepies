import React from 'react';
import RecipeCard from './RecipeCard';

const RecipesList = () => {
  const recipes = [
    {
      name: 'Pasta Carbonara',
      category: 'Italian',
      image: 'path-to-your-pasta-carbonara-image.jpg',
    },
    {
      name: 'Chicken Curry',
      category: 'Indian',
      image: 'path-to-your-chicken-curry-image.jpg',
    },
    // Add more recipes to the array as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
