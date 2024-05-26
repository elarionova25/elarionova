import React from "react";
import {
    StarIcon,
    CodeIcon,
    BrainIcon,
    ContactIcon,
    HomeIcon,
} from '../images/icons';

const Navbar = () => {
    return (
        <nav className="menu">
            {/*<div className="menu_logo">*/}
            {/*    <a className="logo" href="/">*/}
            {/*        <div className="menu_logo_img"></div>*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className="menu_navigation">
                <a href="/" className="menu_navigation_item">
                    <HomeIcon/>
                    <p>Intro</p>
                </a>
                <a href="#about" className="menu_navigation_item">
                    <StarIcon/>
                    <p>About Me</p>
                </a>
                <a href="#skills" className="menu_navigation_item">
                    <CodeIcon/>
                    <p>Skills</p>
                </a>
                <a href="#portfolio" className="menu_navigation_item">
                    <BrainIcon/>
                    <p>Portfolio</p>
                </a>
                <a href="#contact" className="menu_navigation_item">
                    <ContactIcon/>
                    <p>Contact</p>
                </a>
            </div>
            <div className="menu_links">
                <div className="menu_links_item">
                    <a href="https://github.com/elarionova25" target="_blank" rel="noreferrer">
                        <div className="circle github-link"></div>
                        <p>GitHub</p>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;