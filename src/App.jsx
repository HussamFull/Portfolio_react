import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from'react-router-dom'
import NotFound from './components/NotFound/NotFound'


export default function App() {
  return (
    <>

      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Header />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/portfolio" element={<Portfolio />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}
