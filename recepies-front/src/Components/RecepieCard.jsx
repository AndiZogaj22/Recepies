import React from 'react';

const RecipeCard = ({ recipe }) => {
  const { name, category, image } = recipe;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-gray-700 text-base">{category}</div>
      </div>
    </div>
  );
};

export default RecipeCard;
