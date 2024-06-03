import React, {Suspense} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TranslationProvider} from 'i18nano';

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import LanguageChange from "./components/LanguageChange";

const translations = {
    'en': () => import('../src/shared/localization/en.json'),
    'ru': () => import('../src/shared/localization/ru.json'),
};

const AboutMe = React.lazy(() => {
    return import('./components/AboutMe');
});
const Skills = React.lazy(() => {
    return import('./components/Skills');
});
const Portfolio = React.lazy(() => {
    return import('./components/Portfolio');
});
const Contacts = React.lazy(() => {
    return import('./components/Contacts');
});

function App() {
    AOS.init();

    return <>
        <TranslationProvider translations={translations} language="ru" transition={true}>
            <Suspense fallback={<div/>}>
                <Navbar/>
            </Suspense>
            <main className="container">
                <LanguageChange/>
                <Suspense fallback={<div/>}>
                    <Intro/>
                    <AboutMe/>
                    <Skills/>
                    <Portfolio/>
                    <Contacts/>
                </Suspense>
            </main>
        </TranslationProvider>
    </>
}

export default App;
