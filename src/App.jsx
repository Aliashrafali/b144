import React from 'react'
import './App.css'
// import Bootstrap from './components/Bootstrap'
// import First from './components/First';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      {/* <First /> */}
      {/* <Bootstrap /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='*' element={<h1>404. Page Not Found.</h1>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
