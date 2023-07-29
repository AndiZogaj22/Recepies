import React from 'react';
import myLocalImage from '../assets/bannerimg.jpg'; // Replace 'path/to/your/local/image.jpg' with the actual path to your local image

const ImageCarousel = () => {
  return (
    <header style={{ overflowX: 'hidden' }}>
      <div className="w-full bg-cover bg-center" style={{ height: '32rem', backgroundImage: `url(${myLocalImage})` }}>
        <div className="flex items-center justify-center h-full w-screen bg-gray-900 bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">Welcome to Mediterranean Cuisine</h1>
            <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">"Unlock the secrets of Mediterranean cuisine, where every bite is a journey to the heart of flavor and tradition."</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ImageCarousel;
