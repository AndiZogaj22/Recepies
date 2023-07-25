import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBook, FiHeart } from 'react-icons/fi';
import { GiCook } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <GiCook className="text-primary text-3xl mr-2" />
        <span className="text-primary font-bold text-xl">MediterraneanCuisine</span>
      </div>

      <ul className="flex space-x-4">
        <li>
          <div className="link">
            <h3 className="text-xl hover:underline hover:text-orange-500">Home</h3>
          </div>
        </li>
        <li>
          <div className="link">
            <h3 className="text-xl hover:underline hover:text-orange-500">Recipes</h3>
          </div>
        </li>
      </ul>

      <button className="btn btn-outline btn-success">
        <FiHeart className="text-xl" />My Recipes
      </button>
    </nav>
  );
};

export default Navbar;
