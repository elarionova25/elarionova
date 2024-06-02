import React from "react";
import SkillsCard from "./SkillsCard";
import {skills as skillsArr} from "../shared/skills";
import Heading from "../components/Heading";

const Skills = () => {
    const skills = skillsArr;

    return (
        <section id="skills" className="section skills-section">
            <div className="skills">
                <Heading text="My skills" className="skills-title"></Heading>
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
