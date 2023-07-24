import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Categories from './Components/Categories';
import Intro from './Components/Intro';
import RecipeList from './Components/RecipeList';

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Intro />
      </div>
      <div className="flex justify-center items-center pt-10">
        <SearchBar />
      </div>
      <div className="container mx-auto py-8">
        <Categories />
      </div>
      <div className="container mx-auto py-8">
        <RecipeList />
      </div>
    </>
  );
}

export default App;
