import React, { useEffect, useState } from 'react';

import './Promotions.css';

const Box = (props) => {
  return (
    <div className="box">
      <div className="box-icon">
        <i className={`${props.icon} icon`}></i>
      </div>
      <div className="box-label">
        <p className="label">{props.text}</p>
      </div>
    </div>
  );
}

const Promotions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([{ id: 1, icon: "bi bi-truck", text: "Free delivery" },
          { id: 2, icon: "bi bi-box2", text: "Box free returns" },
          { id: 3, icon: "bi bi-piggy-bank", text: "10% OFF Chosen Coupons" }]);
  }, []);

  return (
    <div className="panel">
      {
        data.map(item => <Box key={item.id} {...item} />)
      }
    </div>
  );
}


export default Promotions;
