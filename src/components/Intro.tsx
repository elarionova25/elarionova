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

    return (
        <section id="intro" className="section intro-section">
            <div className="intro">
                <h1 className="intro_header" ref={textRef}></h1>
                <div className="intro_contact">
                    <a href="#contact"><button className="intro_contact-button">Reach me</button></a>
                </div>
            </div>
        </section>
    )
}

export default Intro;

