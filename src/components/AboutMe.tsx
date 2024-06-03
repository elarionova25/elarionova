import React from "react";
import Heading from "../components/Heading";
import {useTranslation} from "i18nano";

const AboutMe = () => {
    const t = useTranslation();

    return (
        <section id="about" className="section about-section">
            <div className="about">
                <div className="about-image"
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                >
                </div>
                <div className="about-content">
                    <Heading text={t('aboutMe.title')} className="about-content_title"></Heading>
                    <span className="about-content_text">Привет! Рад приветствовать тебя на моем сайте-портфолио! Я фронтенд разработчик с большой страстью к созданию красивых и функциональных веб-сайтов.

С детства я увлекался компьютерами и технологиями, и моя любовь к программированию началась с создания простых игр и веб-сайтов. С тех пор этот интерес только углубился, и я посвятил свою карьеру фронтенд разработке.

Я обладаю широкими знаниями веб-технологий, таких как HTML, CSS и JavaScript, и всегда стремлюсь узнать что-то новое. Мое основное увлечение - создание веб-интерфейсов, которые не только красивы, но и интуитивно понятны для пользователей. Я также уверен в своих навыках адаптивного дизайна, чтобы мои проекты выглядели отлично на любом устройстве.

Я работаю как самостоятельно, так и в команде, и всегда готов к новым вызовам и проектам. У меня есть опыт работы с различными фреймворками и библиотеками, такими как React и Vue.js, и я всегда открыт для изучения новых инструментов и технологий.

Я стремлюсь к постоянному совершенствованию своих навыков и всегда готов к новым вызовам. </span>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;