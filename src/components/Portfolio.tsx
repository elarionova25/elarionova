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
        title: 'Gazprom Academic Olympiad for school students',
        image: gazpromOlympiad,
        description: "                    Когда я приступил к этому проекту, я обнаружил, что он был разработан с использованием устаревшего фреймворка. Это ограничивало его возможности и усложняло поддержку и расширение. Я принял решение переписать его с нуля, используя Vue 3 - один из самых популярных и современных фреймворков на данный момент.\n" +
            "\n" +
            "                    Переписывая проект, я внедрил лучшие практики разработки, следуя принципам модульности и компонентного подхода Vue. Это позволило сделать код более понятным, поддерживаемым и масштабируемым. Я также провел рефакторинг существующего кода, удалив устаревшие функции и оптимизировав производительность.\n" +
            "\n" +
            "                    Моя работа не ограничивалась только переписыванием проекта. Я также разработал новый и современный дизайн, который соответствует требованиям современных пользователей и последним трендам веб-дизайна. Мой дизайн добавил проекту свежий внешний вид и повысил его привлекательность.\n",
        url:'https://olympiad.gazprom.ru/#/',
        className: 'gp',
        isImageFirst: true,
    },
    {
        id: 2,
        title: 'Domain names generator',
        image: domainsPage,
        description: "Моя задача заключалась в создании страницы, которая позволяет пользователям вводить любые слова или фразы и получать различные варианты доменных имен, основанных на их вводе. Для этого я использовал современные фронтенд технологии, такие как HTML, CSS и JavaScript.\n" +
            "\n" +
            "Одним из ключевых аспектов этой фичи было форматирование текста на фронтенде. Я реализовал возможность изменять шрифт, размер, цвет и другие атрибуты текста, чтобы пользователи могли визуально настраивать результаты подбора доменных имен.\n" +
            "\n" +
            "Для достижения этой функциональности я использовал библиотеку JavaScript, которая предоставляет мощные инструменты для манипуляции с текстом и его стилями. Я также использовал CSS, чтобы создать красивый и интуитивно понятный интерфейс для пользователей.\n",
        url:'https://sprinthost.ru/tariffs/domains',
        className: 'sph',
        isImageFirst: false,
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
                                return <ProjectCard
                                    key={el.title}
                                    projectImg={el.image}
                                    title={el.title}
                                    description={el.description}
                                    url={el.url}
                                    className={el.className || ""}
                                    isImageFirst={el.isImageFirst}
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