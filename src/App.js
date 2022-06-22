import React, { useState } from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SigleCountryDe from './components/SigleCountryDe'
import Home from './components/Home';

const App = () => {
  const [put,setPut] = useState('')
  console.log(put,'pupappppp');
  return (
    // <div>
    //   <Home />
    // </div>
    <BrowserRouter>
   
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/single/:id' element={<SigleCountryDe/>} />
     
    </Routes>
  </BrowserRouter> 
  )
}

export default App
