import React from 'react'
import './header.css'
import Navbar from '../navbar/Navbar'
import Corousel from '../corousel/Corousel'
import img1 from '../../assets/images/corousel1.png'
// impo

function Header() {
  return (
    <div>
        <Navbar />
        <div className='navbar__corousels section'>
            <Corousel src={img1} heading='Subscribe to the best of Udemy' text='With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.' />
        </div>
    </div>
  )
}

export default Header
