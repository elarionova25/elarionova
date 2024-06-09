import React from 'react';
import Heading from '../components/Heading';
import { useTranslation } from 'i18nano';
// @ts-ignore

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
                    <Heading text={ t('aboutMe.title') } className="about-content_title"></Heading>
                    <p className='about-content_text' dangerouslySetInnerHTML={ { __html: t('aboutMe.text') } }></p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;