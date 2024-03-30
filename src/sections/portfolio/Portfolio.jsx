import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import calevent from '../../assets/calevent.jpeg'
import codingQuiz from '../../assets/codingQuiz.jpeg'
import WDSscreenshot from '../../assets/WDSscreenshot.png'
import ProjectCategories from './ProjectCategories'
import roama from '../../assets/roama.png'
import Projects from './Projects'



const data = [

    {
        id: 1,
        category: 'Collab',
        image: calevent,
        title: "CalEvent",
        desc: "First group collaboration project. Event search, fetch and suggestion app, built with JavaSCript and server API's.",
        deployment: 'https://abdalla-diaai.github.io/calevent/',
        github: 'https://github.com/abdalla-diaai/calevent.git'
    },
    {
        id: 2,
        category: 'Collab',
        image: roama,
        title: "roama",
        desc: "Second group collaboration project. Social media app with travel theme. Account creation and login/logout features. Search friends and posts and helpful language translate features.",
        deployment: 'https://main--roama.netlify.app/',
        github: 'https://github.com/amilou86/Roama.git'
    },
    {
        id: 3,
        category: 'JavaScript',
        image: codingQuiz,
        title: "Quiz",
        desc: "Timed coding quiz, time reduction for incorrect answer, high-scores saved to local storage",
        deployment: 'https://amilou86.github.io/Timed-Quiz/',
        github: 'https://github.com/amilou86/Timed-Quiz.git'
    },
    {
        id: 4,
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