import React, {useEffect, useRef} from "react";
import { oneko } from "../plugins/oneko";
// @ts-ignore
import CV from '../docs/CV.pdf';

const Intro = () => {
    const textRef: any = useRef('');

    useEffect(() => {
        const text = 'Hi*_I\'m Ekaterina,_<Front-End Developer/>'.split('');

        text.forEach((char, index) => {
            if (char === '_') {
                const br =  document.createElement('br');
                textRef.current.append(br);
                return;
            }

            const letter = document.createElement('span');
            letter.innerText = char;
            letter.className = 'intro_header_letter';

            if (char === '*') {
                letter.innerText = '👋🏻';
                letter.className = 'intro_header-waving';
            }

            if (char === 'E') {
                letter.className = 'intro_header_letter-main';
            }

            textRef.current.append(letter);
        })
    }, []);

    const addOneko = () => {
        oneko()
    }

    const removeOneko = () => {
        document.querySelector('#oneko')?.remove();
    }

    return (
        <section id="intro" className="section intro-section" onMouseEnter={addOneko} onMouseLeave={removeOneko}>
            <div className="intro">
                <h1 className="intro_header" ref={textRef}></h1>
                <p className="intro_desc">📍 Saint-Petersburg</p>
                <div className="intro_content">
                    <a href="#contacts">
                        <button className="intro-button" data-aos="fade-up">Reach me</button>
                    </a>
                    <a href={CV} target="_blank">
                        <button className="intro-button" data-aos="fade-up">CV</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Intro;

