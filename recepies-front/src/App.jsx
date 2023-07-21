
import './App.css'
import SearchBar from './Components/SearchBar'
import Categories from './Components/Categories'

function App() {

  return (
    <>
    <div className="flex justify-center items-center ">
    <SearchBar />
    </div>
      
      <div className="container mx-auto py-8">
      <Categories />
    </div>
    </>
  )
}

export default App
