import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'

const data = [
    { id: 1, icon: <HiOutlineMail />, link: 'mailto:amiedwards86@gmail.com' },
    { id: 2, icon: <RiMessengerLine />, link: 'https://www.messenger.com/t/638568889587414/' },
    { id: 3, icon: <FaWhatsapp />, link: 'https://wa.me/+447703785849' }
]


const Contact = () => {
    return (
        <section id="contact">
            <h2>Get In Touch</h2>
            <p>
                Send me a message via any of the links below!
            </p>
            <div className="container contact-container" data-aos="fade-up">
                {
                    data.map(data => <a key={data.id} href={data.link} target="_blank" rel="noopener noreferrer">{data.icon}</a>)
                }
            </div>
        </section>
    )
}

export default Contact