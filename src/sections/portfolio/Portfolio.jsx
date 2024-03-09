import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import calevent from '../../assets/calevent.jpeg'
import codingQuiz from '../../assets/codingQuiz.jpeg'
import ProjectCategories from './ProjectCategories'
import Projects from './Projects'
// import project2 from '../../assets/project2.png'


const data = [

    {
        id: 1,
        category: 'Collab',
        image: calevent,
        title: "CalEvent",
        desc: "First group collaboration project. Event search, fetch and suggestion app, built with JavaSCript and server API's.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/abdalla-diaai/calevent.git'
    },
    {
        id: 2,
        category: 'JavaScript',
        image: codingQuiz,
        title: "Quiz",
        desc: "Timed coding quiz, time reduction for incorrect answer, highscores saved to local storage",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/amilou86/Timed-Quiz.git'
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