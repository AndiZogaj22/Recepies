import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBook, FiHeart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <FiBook className="text-primary text-3xl mr-2" />
        <span className="text-primary font-bold text-xl">MediterraneanCuisine</span>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-primary hover:text-secondary">
            <FiHome className="text-xl" />
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="text-primary hover:text-secondary">
            <FiBook className="text-xl" />
          </Link>
        </li>
      </ul>

      {/* Saved Recipes button */}
      <button className="btn btn-primary">
        <FiHeart className="text-xl" />
      </button>
    </nav>
  );
};

export default Navbar;
