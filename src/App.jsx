//import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App