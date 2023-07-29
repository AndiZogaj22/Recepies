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
      <div className="container mx-auto py-8">
        <Categories />
      </div>
      <div className="flex justify-center items-center pt-10">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <RecipeList limit={10} searchQuery={searchQuery} />
    </div>
  );
};

export default TotalRecipes;
