import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css';
import RecipeList from '../Components/RecipeList'
import '../ScrollBar.css';

const TotalRecipes = () => {
  return (
    <div>TotalRecipes
        <Navbar />
        <RecipeList />
    </div>
  )
}

export default TotalRecipes