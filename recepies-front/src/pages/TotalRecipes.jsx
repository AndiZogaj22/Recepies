import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../App.css';
import RecipeList from '../Components/RecipeList';
import '../ScrollBar.css';
import Categories from '../Components/Categories';
import SearchBar from '../Components/SearchBar';

const TotalRecipes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar />
      
      <div className="flex justify-center items-center pt-24">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="flex justify-center items-center pb-16 pt-10">
      <RecipeList limit={10} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default TotalRecipes;
