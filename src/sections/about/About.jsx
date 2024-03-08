import React from 'react'
import './about.css';
import profile2 from '../../assets/profile2.jpeg'
import CV from '../../assets/CV.pdf';
import { LuDownload } from "react-icons/lu";
import Card from '../../components/Card';
import './about.css';
import { GrProjects } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { BiHappyHeartEyes } from "react-icons/bi";


const data = [
    { id: 1, icon: <GrProjects />, title: 'Projects', desc: 'personal and collabs' },
    { id: 2, icon: <FaAward />, title: 'Experience', desc: '10+ Years Investigations, 1+ Coding' },
    // { id: 3, icon: <BiHappyHeartEyes />, title: 'Clients', desc: '70+ happy clients' }
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
                    <p>
                        For years, I excelled in the world of investigations, tackling cases like criminal tax-fraud, insurance fraud, and complex energy complaints. But the world changed during the Covid Pandemic, and so did my perspective of my own future. I realised I needed to be more decisive about how my life would look and actively choose my career, instead of stumbling into one that chose me.</p>

                    <p>The exciting and fast-growing tech sector allows me to embrace my love of creativity and problem-solving. As a full-time working mum, the traditional path of university wasn't an option. So, filled with determination, I decided an intensive front-end web development bootcamp was the best path to achieve my goals, despite the personal sacrifices needed.</p>

                    <p> The journey has been tough, filled with times of self-doubt, but has also been incredibly rewarding. I have delved into the fundamentals of HTML, CSS, JavaScript, React, TDD, BDD, and Node.js. Collaborating with fellow students, we tackled multiple group app projects to prepare for the real-world life of a web developer.
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <LuDownload /></a>
                </div>
            </div>
        </section>
    );
};



export default About