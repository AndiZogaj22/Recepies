import React, { useState } from 'react';
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
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white p-4 flex flex-wrap justify-between items-center shadow-md">
        <div className="flex items-center">
          <GiCook className="text-amber-600 text-3xl mr-2" />
          <span className="text-amber-600 font-bold text-xl">MediterraneanCuisine</span>
        </div>

        <div className="flex space-x-4 items-center ml-auto">
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-amber-600 hover:text-amber-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <ul
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-4 md:items-center`}
          >
            {navigations.map((navigation) => (
              <li
                key={navigation.path}
                className="list-none text-decoration-line: none md:list-none"
              >
                {navigation.name === 'My Recipes' ? (
                  <Link to={navigation.path}>
                    <button
                      className="btn btn-outline btn-success flex items-center justify-center"
                      style={{ minWidth: '120px' }}
                    >
                      <FiHeart className="text-xl mr-1" />
                      {navigation.name}
                    </button>
                  </Link>
                ) : (
                  <Link
                    to={navigation.path}
                    className="link flex items-center justify-center text-decoration-none no-underline hover:text-amber-600"
                    style={{ minWidth: '120px' }}
                  >
                    {navigation.name === 'Home' && <FiHome className="text-lg mr-1" />}
                    {navigation.name === 'All Recipes' && (
                      <FiBookOpen className="text-lg mr-1" />
                    )}
                    {navigation.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
