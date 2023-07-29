import React from 'react';
import { Link } from 'react-router-dom';
import { GiCook } from 'react-icons/gi';
import { FiHome, FiBookOpen } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';

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
    <nav className="bg-white p-4  flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <GiCook className="text-amber-600	 text-3xl mr-2" />
        <span className="text-amber-600	 font-bold text-xl">MediterraneanCuisine</span> {/* Updated the text color to green */}

      </div>

      <ul className="flex space-x-4 items-center ml-auto list-none"> {/* Added list-none class */}
        {navigations.map((navigation) => (
          <li key={navigation.path} className="list-none 	text-decoration-line: none;"> {/* Added list-none class */}
            {navigation.name === 'My Recipes' ? (
              <Link to={navigation.path}>
                <button className="btn btn-outline btn-success flex items-center justify-center " style={{ minWidth: '120px' }}>
                  <FiHeart className="text-xl mr-1" />
                  {navigation.name}
                </button>
              </Link>
            ) : (
              <Link
                to={navigation.path}
                className="link flex items-center justify-center text-decoration-none no-underline hover:text-amber-600	" // Updated hover effect and removed text decoration
                style={{ minWidth: '120px' }}
              >
                {navigation.name === 'Home' && <FiHome className="text-lg mr-1" />}
                {navigation.name === 'All Recipes' && <FiBookOpen className="text-lg mr-1" />}
                {navigation.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
