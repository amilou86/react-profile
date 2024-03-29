import './footer.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from 'react-icons/ai'

const links = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#portfolio', title: 'Portfolio' },
    { id: 4, link: '#contact', title: 'Contact' }
]

const socials = [
    { id: 1, link: 'https://www.instagram.com/unapologeticallyami/', icon: <AiOutlineInstagram /> },
    { id: 2, link: 'https://twitter.com/AmiEdwardsDev', icon: <FaXTwitter /> },
    { id: 3, link: 'https://github.com/amilou86', icon: <AiFillGithub /> }
]
const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <ul className='nav-menu'>
                    {
                        links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
                    }
                </ul>
                <div className="footer-socials">
                    {
                        socials.map(socials => <a key={socials.id} href={socials.link} target="_blank" rel="noopener noreferrer">{socials.icon}</a>)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer