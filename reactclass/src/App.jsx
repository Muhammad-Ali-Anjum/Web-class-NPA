import React from 'react'
import './App.css'
// import Header from './components/Header'
import Header from './components/Header'
import Img from './assets/carousel-1.jpg'


function App() {
  return (
  <div className='bg-green-200 text-pink'>
    <Header />
   {/* shopping card */}
    <div className='md:flex justify-center items-center h-screen'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <img src={Img} alt="product" />
        <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
        <ul className='mb-4'>
          <li className='flex justify-between mb-2 px-96'>
            <span>Product 1</span>
            <span>$10.00</span>
          </li>
          <li className='flex justify-between mb-2 px-96'>
            <span>Product 2</span>
            <span>$20.00</span>
          </li>
          <li className='flex justify-between mb-2 px-96 '>
            <span>Product 3</span>
            <span>$15.00</span>
          </li>
        </ul>
        <div className='flex justify-between font-bold text-lg'>
          <span>Total:</span>
          <span>$45.00</span>
        </div>
      </div>
    </div>

  </div>
  )
}
export default App