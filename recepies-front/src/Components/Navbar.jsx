import React from 'react';
import { Link } from 'react-router-dom';
import { GiCook } from 'react-icons/gi';

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'All Recipes',
    path: '/allrecipes'
  },
  {
    name: 'My Recipes',
    path: '/myrecipes'
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <GiCook className="text-primary text-3xl mr-2" />
        <span className="text-primary font-bold text-xl">MediterraneanCuisine</span>
      </div>

      <ul className="flex space-x-4">
        {navigations.map((navigation) => (
          <li key={navigation.path}>
            <Link to={navigation.path} className="link">
              <h3 className="text-xl hover:underline hover:text-orange-500">{navigation.name}</h3>
            </Link>
          </li>
        ))}
      </ul>

      
    </nav>
  );
};

export default Navbar;
