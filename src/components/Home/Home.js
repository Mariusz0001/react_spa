import React, { useContext, useLayoutEffect, useRef } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { UserContext } from '../../context/UserContext';

import Promotions from '../Promotions/Promotions';

import './Home.css';

const Home = () => {

  gsap.registerPlugin(ScrollTrigger);

  const { user } = useContext(UserContext);

  const welcome = useRef();
  const promotionsRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      promotionsRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: promotionsRef.current,
          start: "30% 90%",
          end: "bottom"
        }
    });

    if (welcome?.current !== undefined) {
      let chars = SplitTextToChars(welcome.current);

      gsap.set(welcome.current, { perspective: 400 });

      gsap.from(
        chars,
        {
          duration: 0.2,
          opacity: 0,
          scale: 1,
          y: -40,
          rotationX: -90,
          transformOrigin: "0% 50% -50",
          ease: "inOut",
          stagger: 0.025,
          scrollTrigger: {
            trigger: welcome.current,
            start: "15% 90%",
            end: "bottom"
          }
        },
        "+=0"
      );
    }
  }, [user]);

  return (
    <>

      <img src={process.env.PUBLIC_URL + '/b1.png'} className="bg-image top" />
      <div id="section1" className="section">
        {user.length > 0 && <h2 ref={welcome}>Welcome {user}!</h2> }
        <p>
          If you'd like to automate the inclusion of import React from 'react' for all files that use jsx syntax, install the react-require babel plugin:

          npm install babel-plugin-react-require --save-dev
          Add react-require into .babelrc.
          This plugin should be defined before transform-es2015-modules-commonjs plugin because it's using ES2015 modules syntax to import React into scope.
        </p>
        <p>
          SPA single page application działa w ten sposób, że klient wysyła zadanie do serwera,
          adres w przeglądarce i otrzymuje od serwera tylko zmieniona zawartość (bez nagłówków itp, inncych komponentów).
          Zawartość jest w pliku js i jest dynamicznie tworzony plik html już po stronie klienta.
          W momencie gdy chcemy wyświetlić podstronę np /contact klient nie komunikuje się z serwerem,
          tylko we własnym zakresie zmienia kontent (update DOM)
        </p>
      </div>
      <div id="section2" className="section" ref={promotionsRef} >
        <Promotions />
      </div>
      <div id="section3" className="section">

      </div>
    </>
  );
}

function SplitTextToChars(textNode) {
  const textContent = textNode.textContent;
  const textSplit = textContent.split("");

  const frag = document.createDocumentFragment();
  textSplit.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style = `${letter === " " ? "min-width: 1rem;" : ""}z-index: ${textSplit.length - i
      }; position: relative; display: inline-block;`;
    frag.appendChild(span);
  });
  textNode.textContent = "";
  textNode.appendChild(frag);

  return textNode.children;
}

export default Home;
