import React from 'react'
import './navbar.css'
import home from '../../assets/home48.png'


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
                    <img src={home} alt="home" />
                </a>
                <ul className='nav-menu'>
                    {
                        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                    }
                </ul>

            </div>
        </nav>
    )
}

export default Navbar