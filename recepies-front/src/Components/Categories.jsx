import React from "react";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faMusic, faBook, faFilm } from "@fortawesome/free-solid-svg-icons";

// Rest of the component code...

const Categories = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

  // Array of icons
  const icons = [
    <FaStar className="mr-1" />,
    <FontAwesomeIcon icon={faHome} className="mr-1" />,
    <FontAwesomeIcon icon={faUser} className="mr-1" />,
    <FontAwesomeIcon icon={faMusic} className="mr-1" />,
    <FontAwesomeIcon icon={faBook} className="mr-1" />,
  ];

  // Function to get a random icon for each category
  const getRandomIcon = () => icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="bg-gray-200 p-4 flex space-x-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-white rounded-full cursor-pointer hover:bg-gray-100 transition duration-300 flex items-center"
        >
          {getRandomIcon()}
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
