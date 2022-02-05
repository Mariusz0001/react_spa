import React, { useEffect, useLayoutEffect, useRef, useState }  from 'react';
import { gsap } from "gsap";

import './Promotions.css';

  const Box = (props) => {

    const el = useRef();

    useLayoutEffect(() => {
      setTimeout(() => {
        gsap.fromTo(".box", {opacity: 0, y:-20}, {opacity: 1, y:0, duration: 0.5, stagger: 0.2});
      }, 1000);
      
    }, []);
    
  return (
    <div className={`box`} ref={el}>
      <i className={`${props.icon} icon`}></i>
      <p className="label">{props.text}</p>
    </div>
  );
}

const Promotions = () => {
      const [data, setData] = useState([]);
      
      useEffect(() => {
        
          setData([ { id: 1, icon:"bi bi-truck", text:"Free delivery" },
                  { id: 2, icon:"bi bi-box2", text:"Box free returns" },
                  { id: 3, icon:"bi bi-piggy-bank", text:"10% OFF Chosen Coupons" }]);
        
      }, []);
      
    
      return (
        <div className="panel"> 
          {
            data.map(item => <Box key={item.id} {...item }/>)
          }
        </div>
      );
}

export default Promotions;
