import React from 'react'
import '../App.css';
import '../ScrollBar.css';
import ImageCarousel from '../Components/ImageCarousel'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import RecipeList from '../Components/RecipeList'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   <>
     <Navbar />
      <div className="flex justify-center items-center">
        <ImageCarousel /> 
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
      <div className="text-center mt-4">
        <Link to="/allrecipes">
          <button className="btn btn-outline btn-warning">See All</button>
        </Link>
      </div>
   </>
  )
}

export default Home