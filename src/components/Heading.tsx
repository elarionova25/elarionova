import React from 'react';

interface IHeadingfProps {
  text: string;
  className: string;
}

const Heading: React.FC<IHeadingfProps> = ({text, className}) => {

  const heading: any = React.useRef();
  const characters = text.split('');
  
  
  React.useEffect(() => {
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
  }, []);


  return (
    <h1 ref={heading} className={className}></h1>
  )
}

export default Heading;
