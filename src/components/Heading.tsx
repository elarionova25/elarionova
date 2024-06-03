import React, {useEffect, useRef} from 'react';
import {useTranslation} from "i18nano";

interface IHeadingfProps {
  text: string;
  className: string;
}

const Heading: React.FC<IHeadingfProps> = ({text, className}) => {
  const heading: any = useRef();

  console.log(text)

  useEffect(() => {
    const characters = text.split('');
    console.log(characters)
    heading.current.innerHTML = '';

    characters.forEach((char, i) => {
      const letter = document.createElement('span');

      if (char === ' ') {
        letter.style.display = 'inline';
      } else {
        letter.style.display = 'inline-block';
      }
      letter.innerText = char;

      letter.dataset.aos="zoom-in";
      letter.dataset.aosDuration="100";
      letter.dataset.aosDelay=`${i * 100}`

      heading.current.append(letter)
    });
  }, [text]);


  return (
    <h1 ref={heading} className={className}> </h1>
  )
}

export default Heading;
