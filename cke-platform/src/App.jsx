


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar.jsx'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
