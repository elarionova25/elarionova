import React from "react";

const Navbar = () => {
    return (
        <nav className="menu">
            <div className="menu_navigation">
                <a href="#about" className="menu_navigation_item">
                    <p>About Me</p>
                </a>
                <a href="#skills" className="menu_navigation_item">
                    <p>Skills</p>
                </a>
                <a href="#portfolio" className="menu_navigation_item">
                    <p>Portfolio</p>
                </a>
                <a href="#contact" className="menu_navigation_item">
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