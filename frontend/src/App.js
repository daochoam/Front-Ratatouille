import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import FormRecipe from './components/FormRecipe/FormRecipe.jsx';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing'

import formImage from './assets/images/form.jpg';
import homeImage from './assets/images/mesa.jpg';
import Home from './components/Home/Home';

function App() {
  const { pathname } = useLocation();

  let Background = ''
  if (pathname === '/formRecipe') {
    Background = formImage
  } else {
    Background = homeImage
  }

  return (
    <div className='App'
      style={{
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed',
      }}>
      {!/(\/)$/.test(pathname) ? <NavBar /> : null}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/formRecipe" element={<FormRecipe />} />
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {/* <Route path={"*"} element={ <Page404 />} /> */}
      </Routes>
    </div >)
}

export default App;