import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Auth from './pages/Auth';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
      <Route path='*' element={<HomePage/>}/>
    </Routes>
    </Router>
  )
}

export default App