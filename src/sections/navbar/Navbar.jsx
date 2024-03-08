import React from 'react'
import { BiSolidHomeHeart } from "react-icons/bi";
import { IoColorWandOutline } from "react-icons/io5";
import './navbar.css'

const data = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#portfolio', title: 'Portfolio' },
    { id: 4, link: '#contact', title: 'Contact' }
]

const Navbar = () => {

    return (
        <nav>
            <div className="container nav-container">
                <a href="index.html" className='nav-logo'>
                    <BiSolidHomeHeart size={24} color="white" alt="Home icon" />
                </a>
                <ul className='nav-menu'>
                    {
                        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                    }
                </ul>
                <button id="theme-icon"><IoColorWandOutline /></button>
            </div>
        </nav>
    )
}

export default Navbar