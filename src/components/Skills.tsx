import React from "react";
import SkillsCard from "./SkillsCard";
import {skills as skillsArr} from "../shared/skills";

const Skills = () => {
    const skills = skillsArr;

    return (
        <section id="skills" className="section skills-section">
            <div className="skills">
                <h1 className="skills-title" data-aos="zoom-in">My skills</h1>
                <div className="skills-content">
                    {skills.map((item, key) => {
                        return (
                            <SkillsCard key={key} card={item}/>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;
