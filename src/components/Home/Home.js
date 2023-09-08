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
      <div id="section1" className="section-img">
       {/* <img src={process.env.PUBLIC_URL + '/b1.png'} className="bg-image" /> */ }
      </div>
      <div id="section1" className="section">
        <div className="text-content">
          {user.length > 0 && <h2 ref={welcome}>Welcome {user}!</h2>}
          <br></br>
          <h4>Importing React</h4>
          <p>
            If you'd like to automate the inclusion of import React from 'react' for all files that use jsx syntax, install the react-require babel plugin:

            npm install babel-plugin-react-require --save-dev
            Add react-require into .babelrc.
            This plugin should be defined before transform-es2015-modules-commonjs plugin because it's using ES2015 modules syntax to import React into scope.
          </p>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
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
