// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TotalRecipes from './pages/TotalRecipes';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import RecipeDetails from './Components/RecipeDetails'; // Replace './path/to/RecipeDetails' with the correct path to your RecipeDetails component
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allrecipes" element={<TotalRecipes />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/totalrecipes/:recipeId" element={<RecipeDetails />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
