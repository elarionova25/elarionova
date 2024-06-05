import React from 'react';
import {
    StarIcon,
    CodeIcon,
    BrainIcon,
    ContactIcon,
    HomeIcon,
} from '../images/icons';
import { useTranslation } from 'i18nano';

const Navbar = () => {
    const t = useTranslation();

    return (
        <nav className="menu">
            <div className="menu_navigation">
                <a href="/" className="menu_navigation_item">
                    <HomeIcon/>
                    <p>{t('navbar.intro')}</p>
                </a>
                <a href="#about" className="menu_navigation_item">
                    <StarIcon/>
                    <p>{t('navbar.aboutMe')}</p>
                </a>
                <a href="#skills" className="menu_navigation_item">
                    <CodeIcon/>
                    <p>{t('navbar.skills')}</p>
                </a>
                <a href="#portfolio" className="menu_navigation_item">
                    <BrainIcon/>
                    <p>{t('navbar.portfolio')}</p>
                </a>
                <a href="#contacts" className="menu_navigation_item">
                    <ContactIcon/>
                    <p>{t('navbar.contact')}</p>
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