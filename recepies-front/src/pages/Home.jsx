import React from 'react'
import '../App.css';
import Intro from '../Components/Intro'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import RecipeList from '../Components/RecipeList'
import Navbar from '../Components/Navbar';
const Home = () => {
  return (
   <>
     <Navbar />
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
  )
}

export default Home