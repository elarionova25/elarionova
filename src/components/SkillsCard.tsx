import React from 'react';
import { skills as skillsArr } from '../shared/skills';

interface ISkillsItem {
  id: number,
  img: any,
  title: string
}

const skills: ISkillsItem[] = skillsArr;

const SkillsCard = () => {
    return (
        <div className="skills-card" data-aos="zoom-in">
            <div className="skills-card_list">
                {skills.map((item, key) => {
                    return (
                        <div className="skills-card_list_item" key={ item.id }>
                            <img src={ item.img } alt={ item.title } />
                            <p className="skills_card_list_item_name">{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SkillsCard;