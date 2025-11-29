import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <nav>
                <ul className='nav_links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#collection">Collection</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
