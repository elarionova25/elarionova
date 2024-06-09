import React from 'react';
import ProjectCard from './ProjectCard';

import {
    gazpromOlympiad,
    domainsPage
} from '../images/portfolio';
import Heading from '../components/Heading';
import { useTranslation } from 'i18nano';

const Portfolio = () => {
    const t = useTranslation();

    const portfolioItems = [
        {
            id: 1,
            title: t('portfolio.gazprom.title'),
            image: gazpromOlympiad,
            description: t('portfolio.gazprom.description'),
            url:'https://olympiad.gazprom.ru/#/',
            className: 'gp',
            isImageFirst: true,
        },
        {
            id: 2,
            title: t('portfolio.domains.title'),
            image: domainsPage,
            description: t('portfolio.domains.description'),
            url:'https://sprinthost.ru/tariffs/domains',
            className: 'sph',
            isImageFirst: false,
        }
    ]

    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="portfolio">
                <Heading text={ t('portfolio.title') } className="portfolio-title"></Heading>
                {/*<p className="portfolio-desc"></p>*/}
                <div className="portfolio-content">
                    <div className="project-cards">
                        {
                            portfolioItems.map((el) => {
                                return <ProjectCard
                                    key={ el.title }
                                    projectImg={ el.image }
                                    title={ el.title }
                                    description={ el.description }
                                    url={ el.url }
                                    className={ el.className || '' }
                                    isImageFirst={ el.isImageFirst }
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;