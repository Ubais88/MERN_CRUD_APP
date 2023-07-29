import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './component/Create'
import Read from './component/Read'
import Update from './component/Update'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<Create/>} />;
            <Route path='/all' element={<Read/>} />;
            <Route path='/:id' element={<Update/>} />;
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App