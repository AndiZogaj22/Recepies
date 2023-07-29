import React from 'react';
import '../App.css';
import '../ScrollBar.css';
import ImageCarousel from '../Components/ImageCarousel';
import SearchBar from '../Components/SearchBar';
import RecipeList from '../Components/RecipeList';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Home = ({ handleSearch }) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <ImageCarousel />
      </div>
      <div className="flex justify-center items-center pt-10">
        <SearchBar handleSearch={handleSearch} />
      </div>

      <div className="container mx-auto py-8">
        {/* Limit the number of recipes to be shown to 9 on the Home page */}
        <RecipeList limit={9} searchQuery="" />
      </div>
      <div className="text-center mt-4 pb-10">
        <Link to="/allrecipes">
          <button className="btn btn-outline btn-warning">See All</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
