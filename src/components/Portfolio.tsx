import React from "react";
import ProjectCard from "./ProjectCard";

import {
    gazpromOlympiad,
    domainsPage
} from '../images/portfolio';
import Heading from "../components/Heading";


const portfolioItems = [
    {
        id: 1,
        title: 'Gazprom',
        image: gazpromOlympiad,
        description: "Academic Olympiad for school students",
        url:'https://olympiad.gazprom.ru/#/',
        className: 'gp',
    },
    {
        id: 2,
        title: 'Sprinthost',
        image: domainsPage,
        description: "Page and domain names generator",
        url:'https://sprinthost.ru/tariffs/domains',
        className: 'sph',
    }
]
const Portfolio = () => {
    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="portfolio">
                <Heading text="My portfolio" className="portfolio-title"></Heading>
                <p className="portfolio-desc">Here is a small gallery of my recent projects. Interested to know more about my work?</p>
                <div className="portfolio-content">
                    <div className="project-cards">
                        {
                            portfolioItems.map((el) => {
                                return <ProjectCard key={el.title} projectImg={el.image} title={el.title} description={el.description} url={el.url} className={el.className || ""}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;