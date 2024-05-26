import React, {Suspense} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const AboutMe = React.lazy(() => {
    return import('./components/AboutMe');
});
const Skills = React.lazy(() => {
    return import('./components/Skills');
});

function App() {
    AOS.init();

    return <>
        <Navbar />
        <main className="container">
            <Intro/>
            <Suspense fallback={<div />}>
                <AboutMe />
                <Skills />
            </Suspense>
        </main>
    </>
}

export default App;
