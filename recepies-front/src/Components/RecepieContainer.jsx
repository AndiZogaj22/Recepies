import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../Components/RecepieCard';

const RecipeContainer = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint that provides recipe data.
    axios.get('https://dummyjson.com/products')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeContainer;
