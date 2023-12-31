import React from "react";
import {Routes, Route} from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavLocal from './templates/Nav'

const App = () => {
  return (
    <>
    <NavLocal />
    <Routes>
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/' element={ <Home /> } />
    </Routes>
    </>
  );
};

export default App;
