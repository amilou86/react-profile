import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import calevent from '../../assets/calevent.jpeg'
import codingQuiz from '../../assets/codingQuiz.jpeg'
import WDSscreenshot from '../../assets/WDSscreenshot.png'
import ProjectCategories from './ProjectCategories'
import roama from '../../assets/roama.png'
import Projects from './Projects'
import HRD from '../../assets/HRD.png'
import mforum from '../../assets/mforum.png'



const data = [

    {
        id: 1,
        category: 'React.js',
        image: HRD,
        title: "Dental Practice",
        desc: "Full website for a dental practice, built with React.js. Submit an application form to register as a patient, explore services offered, meet the team and read patient testimonials ",
        deployment: 'https://marvelous-alfajores-6e8bac.netlify.app/',
        github: 'https://github.com/amilou86/Dentist'
    },

    {
        id: 3,
        category: 'In Progress',
        image: mforum,
        title: 'Forum',
        desc: "Built with React.js, the first task of my internship is to design and build a community discussion forum. This is a work in progress, so may not be perfect just yet. But whatever you see now will only get better. Mazu is Zambian for 'voices', which is exactly what the forum will be, the voice of the Zambian people. The forum is being designed to be used by the Zambian government and politicians, on both a local and national level, to keep their finger on the pulse of the issues facing their residents and constituents. Community members can create an account, view, like, reply and create their own posts on the topics and issues that are impacting them the most. This will give government leaders an easy and convenient way to understand the issues they need to address to improve the lives of those who depend on them. Please note GitHub repo is private.",
        deployment: 'https://mforum.netlify.app/'
    },

    {
        id: 4,
        category: 'Collab',
        image: calevent,
        title: "CalEvent",
        desc: "First group collaboration project. Event search, fetch and suggestion app, built with JavaSCript and server API's.",
        deployment: 'https://abdalla-diaai.github.io/calevent/',
        github: 'https://github.com/abdalla-diaai/calevent.git'
    },
    {
        id: 5,
        category: 'Collab',
        image: roama,
        title: "roama",
        desc: "Create an account and explore our travel themed social media app. This was my second group collaboration project. Search friends, view and create your own posts. With our added helpful language translation feature you can communicate with any user, regardless of their location and improve your language skills along the way.",
        deployment: 'https://main--roama.netlify.app/',
        github: 'https://github.com/amilou86/Roama.git'
    },
    {
        id: 6,
        category: 'JavaScript',
        image: codingQuiz,
        title: "Quiz",
        desc: "Timed coding quiz, time reduction for incorrect answer, high-scores saved to local storage",
        deployment: 'https://amilou86.github.io/Timed-Quiz/',
        github: 'https://github.com/amilou86/Timed-Quiz.git'
    },
    {
        id: 7,
        category: 'JavaScript',
        image: WDSscreenshot,
        title: "Work-Day Scheduler",
        desc: "A simple calendar application that allows the user to save events for each hour of the day",
        deployment: 'https://amilou86.github.io/Work-Day-Scheduler/',
        github: 'https://github.com/amilou86/Work-Day-Scheduler.git'
    }
]

const Portfolio = () => {
    const [projects, setProjects] = useState(data);

    const categories = data.map(item => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filterProjectsHandler = (category) => {
        if (category === "all") {
            setProjects(data);
            return;
        }

        const filterProjects = data.filter(project => project.category === category);
        setProjects(filterProjects);
    }

    return (
        <section id="portfolio">
            <h2>Recent Projects</h2>
            <p>Check out some of the recent projects I've been on personally and collaborating with others</p>
            <div className='container portfolio-container'>
                <ProjectCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Portfolio