import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1 className='logo '>Header</h1>
        <ul className='phead'>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
        <button className='btn'>Get Started</button>
    </div>
  )
}

export default Header