import React from 'react';
interface ICard {
    card: {
        items: ICardItem[],
    }
}

interface ICardItem {
    img: string,
    title: string,
}

const SkillsCard = (props: ICard) => {
    return (
        <div className="skills-card" data-aos="zoom-in">
            {/*<p className="skills-card_title">{props.card.title}</p>*/}
            <div className="skills-card_list">
                {props.card.items.map((item, key) => {
                    return (
                        <div className="skills-card_list_item" key={key}>
                            <img src={item.img} alt={item.title} />
                            <p className="skills_card_list_item_name">{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SkillsCard;