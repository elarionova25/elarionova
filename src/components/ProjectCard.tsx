import React from 'react';
import { ArrowDiagonalIcon } from '../images/icons';

interface IProjectCard {
    projectImg: string;
    title: string;
    description: string;
    url: string;
    className: string;
    isImageFirst: boolean;
}

const ProjectCard: React.FC<IProjectCard> = ({ projectImg, title, description, url, className, isImageFirst })  => {
    return (
        <div className="card-item" style={ { flexDirection: isImageFirst ? 'row' : 'row-reverse' } }>
            <img src={ projectImg } alt="project" className={ `card-item-img ${ className }` }/>
            <div className="card-item-desc">
                <a href={ url } className="card-item-desc_title" target="_blank" rel="noreferrer">{title}<ArrowDiagonalIcon/></a>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;