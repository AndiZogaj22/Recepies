import React, { useState } from 'react';
import '../App.css';
import '../ScrollBar.css';
import ImageCarousel from '../Components/ImageCarousel';
import SearchBar from '../Components/SearchBar';
import HomeList from '../Components/HomeList';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Home = ({ handleSearch }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefreshClick = () => {
    // Update the refreshKey to trigger a re-render of the HomeList component with new recipes
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <ImageCarousel />
      </div>
      <div className="flex justify-center items-center pt-10">
        <h1 className="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">
           Recommend Recipes 
         
          <div className="flex justify-center items-center pt-10">
          <button className="btn btn-outline btn-secondary" onClick={handleRefreshClick}>Refresh</button>
          </div>
        </h1>

      </div>
      <div className="container mx-auto py-8">
        {/* Limit the number of recipes to be shown to 9 on the Home page */}
        <HomeList key={refreshKey} limit={9} searchQuery="" />
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
