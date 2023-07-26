// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TotalRecipes from './pages/TotalRecipes';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allrecipes" element={<TotalRecipes />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/totalrecipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
