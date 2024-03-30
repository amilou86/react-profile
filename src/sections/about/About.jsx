import React from 'react'
import './about.css';
import profile2 from '../../assets/profile2.jpeg'
import cv from '../../assets/CV.pdf';
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
                    <p> Motivated by the impactful changes of the Covid pandemic, I began a
                        journey of self-development.</p>
                    <p>Whilst working full-time and becoming a new
                        parent, and at great personal sacrifice, I have completed professional training in
                        multiple industries.</p>
                    <p> After experiencing a variety of roles, I am now determined
                        in my goal of joining the exciting and dynamic tech sector. I am a creative and
                        pragmatic thinker, who enjoys problem solving, traits that I believe make me
                        naturally well suited to software development.</p>
                    <p> I am extremely proud of the
                        time and hard work I dedicated to completing an intense Front-End Web
                        Development Bootcamp. With my newfound skills in JavaScript and React, I
                        worked both independently and collaboratively to build numerous web-apps
                        and projects.</p>
                    <p> I am inspired by women who have fought hard to create space
                        for future female developers in the traditionally male-dominated STEM sector.
                        I hope continue their legacy and be an example to the women and girls
                        around me.</p>

                    <a href={cv} download className='btn primary'>Download CV <LuDownload /></a>
                </div>
            </div>
        </section >
    );
};



export default About