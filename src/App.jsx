import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

import Navbar from './Components/Navbar/Navbar'
import HomePage from'./Pages/Home/Home'
import AboutPage from'./Pages/About/AboutPage'
import WorksPage from'./Pages/Works/WorksPages'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
