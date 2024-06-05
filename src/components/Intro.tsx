import React, { useEffect, useRef } from 'react';
import { oneko } from '../plugins/oneko';
// @ts-ignore
import CV from '../docs/CV.pdf';
import { useTranslation } from 'i18nano';

const Intro = () => {
    const t = useTranslation();
    const textRef: any = useRef('');
    const introText = t('intro.title');

    useEffect(() => {
        const text = introText.split('');

        textRef.current.innerHTML = '';

        text.forEach((char, i) => {
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

            if (char === 'E' || char === 'Е') {
                letter.className = 'intro_header_letter-main';
            }

            letter.dataset.aos='zoom-in';
            letter.dataset.aosDuration='50';
            letter.dataset.aosDelay=`${ i * 50 }`

            textRef.current.append(letter);
        })
    }, [ introText ]);

    const addOneko = () => {
        oneko()
    }

    const removeOneko = () => {
        document.querySelector('#oneko')?.remove();
    }

    return (
        <section id="intro" className="section intro-section" onMouseEnter={ addOneko } onMouseLeave={ removeOneko }>
            <div className="intro">
                <h1 className="intro_header" ref={ textRef }> </h1>
                <p className="intro_desc">📍 {t('intro.location')}</p>
                <div className="intro_content">
                    <a href="#contacts">
                        <button className="intro-button" data-aos="fade-up">{t('intro.reachMe')}</button>
                    </a>
                    <a href={ CV } target="_blank" rel="noreferrer">
                        <button className="intro-button" data-aos="fade-up">{t('intro.cv')}</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Intro;
