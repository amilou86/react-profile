import React from 'react'
import './about.css';
import profile2 from '../../assets/profile2.jpeg'
import AEdwardsCV from '../../assets/AEdwardsCV.pdf'
import { LuDownload } from "react-icons/lu";
import Card from '../../components/Card';
import './about.css';
import { GrProjects } from "react-icons/gr";
import { FaAward } from "react-icons/fa";



const data = [
    { id: 1, icon: <GrProjects />, title: 'Projects', desc: 'personal and collabs' },
    { id: 2, icon: <FaAward />, title: 'Experience', desc: '10+ Years Investigations, 1+ Coding' },
]

const About = () => {
    return (
        <section id="about">
            <div className="container about-container">
                <div className="about-left">
                    <div className="about-portrait">
                        <img src={profile2} alt="profile pic" />
                    </div>
                </div>
                <div className="about-right">
                    <h2>About Me</h2>
                    <div className="about-cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about-card">
                                    <span className='about-card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p> As an accomplished professional, transitioning from a successful career in
                        investigations to web development, I bring a unique blend of analytical,
                        problem-solving, and communication skills to the tech sector. My investigative
                        experience, focused on various types of fraud and complex complaints, has
                        equipped me with meticulous attention to detail and a methodical approach to
                        problem-solving, which are directly applicable to debugging code and
                        developing efficient applications.</p>
                    <p>Having recently completed an intensive front-end web development bootcamp
                        with a score of 97%, I have gained hands-on experience with JavaScript, React,
                        TDD, OOP, Node.js, and Agile methodologies. My ability to manage individual
                        assignments and collaborate on group projects showcases my versatility in
                        working both independently and as part of a team. I am committed to further
                        developing my coding skills, currently learning Python and SQL, and am eager
                        to contribute to innovative projects.</p>
                    <p>Balancing full-time work with coding studies and personal responsibilities has
                        honed my time management and prioritisation abilities, ensuring I consistently
                        meet deadlines and deliver high-quality work. My dedication to continuous
                        learning and my passion for creative problem-solving drive my pursuit of a
                        successful career in web development.</p>
                    <p>I am a strong advocate for equality, inclusion, and diversity, believing that
                        diverse teams drive innovation. With my background and technical expertise, I
                        am excited to bring my skills to the tech sector and contribute to dynamic and
                        inclusive projects.</p>

                    <a href={AEdwardsCV} download className='btn primary'>Download CV <LuDownload /></a>
                </div>
            </div>
        </section >
    );
};



export default About