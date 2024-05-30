import React, {useEffect, useRef} from "react";

const Intro = () => {
    const textRef: any = useRef('');

    useEffect(() => {
        const text = 'Hi*_I\'m Ekaterina,_Front-End Developer'.split('');

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
        const onekoEl: HTMLElement | null = document.querySelector('#oneko');

        if (!onekoEl) return;

        if (onekoEl.style.display === 'none') {
            onekoEl.style.display = 'block';
        }
    }

    return (
        <section id="intro" className="section intro-section" onMouseEnter={addOneko}>
            <div className="intro">
                <h1 className="intro_header" ref={textRef} data-aos="fade-up"></h1>
                <div className="intro_contact">
                    <a href="#contact"><button className="intro_contact-button" data-aos="fade-up">Reach me</button></a>
                </div>
            </div>
        </section>
    )
}

export default Intro;

