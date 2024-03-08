import React from 'react'
import './header.css'
import profile2 from '../../assets/profile2.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const data = [
    { id: 1, link: 'https://www.instagram.com/unapologeticallyami/', icon: <FaInstagram /> },
    { id: 2, link: 'hhttps://twitter.com/AmiEdwardsDev', icon: <FaXTwitter /> },
    { id: 3, link: 'https://github.com/amilou86', icon: <FaGithub /> }
]

const Header = () => {

    return (
        <header id="header">
            <div className="container header-container">
                <div className='header-profile'>
                    <img src={profile2} alt="header profile pic" />
                </div>
                <h3 data-aos="fade-up">Ami Edwards</h3>
                <p data-aos="fade-up">
                    Junior Web Developer
                </p>
                <div className="header-cta">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <br /><a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header-socials">
                    {data.map(item => <a key={item.id} href={item.link} target="_blank"
                        rel="noopener noreferrer">{item.icon}</a>)}
                </div>
            </div>
        </header >
    )
}

export default Header