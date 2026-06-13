import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import About from './page/About'
import Contact from './Contact'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        
        <Header />

        {/* Main Content */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  )
}

export default App