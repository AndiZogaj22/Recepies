import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
      <div className="flex justify-center items-center">
        <Intro />
      </div>
      <div className="flex justify-center items-center pt-10">
        <SearchBar />
      </div>
      <div className="container mx-auto py-8">
        <Categories />
      </div>
      <div className="container mx-auto py-8">
        <RecipeList />
      </div>
    </div>
  )
}

export default Home