import React from 'react';
import SkillsCard from './SkillsCard';
import Heading from '../components/Heading';
import { useTranslation } from 'i18nano';

const Skills = () => {
    const t = useTranslation();

    return (
        <section id="skills" className="section skills-section">
            <div className="skills">
                <Heading text={ t('skills.title') } className="skills-title"></Heading>
                <div className="skills-content">
                    <SkillsCard />
                </div>
            </div>
        </section>
    )
}

export default Skills;
