//import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App