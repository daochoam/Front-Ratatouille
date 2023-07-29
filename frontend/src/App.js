import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form.jsx';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import { handlerOnClose, handlerOnSearch } from "./services"

function App() {
  const { pathname } = useLocation();

  //! HOOKS
  const [recipes, setRecipe] = useState([])

  // TODO: onSearch onClose Function
  const onSearch = (id) => { handlerOnSearch(id, recipes, setRecipe) }
  const onClose = (id) => { handlerOnClose(id, recipes, setRecipe) }

  return (
    <div className='App'>
      {/(\/home)$/.test(pathname) ? <NavBar onSearch={onSearch} /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path='/home' element={<Cards key={recipes.Id} Recipes={recipes} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:detailId' element={<Detail onClose={onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
        {/* <Route path={"*"} element={ <Page404 />} /> */}
      </Routes>
    </div >)
}

export default App;