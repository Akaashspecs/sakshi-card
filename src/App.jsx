import { useState } from 'react'

import './App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import Question from './Question'






function App() {




  return (

      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/question" element={<Question />} />
   
    </Routes>

  )
}

export default App
