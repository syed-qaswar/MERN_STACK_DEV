import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App(){
  return(
    // react fragment
    // <>
    //   <h1 className="text">Our new react project</h1>
    //   <p>WE are working on react</p>
    // </>
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>

    // Home(page)
        // -Navbar(component)
        // -Hero Section
        // -Services section with Cards
        // Cards as components
  )
} 

export default App;