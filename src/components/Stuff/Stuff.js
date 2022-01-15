import React, {useContext, useRef} from 'react';
import { UserContext } from '../../context/UserContext';
import './Stuff.css';

function Stuff() {

   const {user, setUser} = useContext(UserContext);

   const _userName = useRef(null);

  const onChangeUserName = () =>{
    let val = _userName.current.value;

    if(val.length > 0){
      setUser(val);
    }
  }

  return (
    <div>
      <h1>{user}, please check below informations.</h1>

      <input type="text" ref={_userName} className="form-control" name="" id="" placeholder={user}/>
      <button type="button" className="btn btn-outline-primary" onClick={() => onChangeUserName()}>Change userName</button>
      <hr></hr>
      <h2>Description</h2>
      <p>MPA multi page application działa w ten sposób, że klient wysyła zadanie do serwera z, adres w przeglądarce i otrzymuje od serwera cały plik html, gotowy, statyczny plik. </p>
      <ol>
        <li>
          Coś tam
        </li>
        <li>
          Mleko
        </li>
        <li>
          Woda
        </li>
        <li>
          Kiełbasa?
        </li>
      </ol>
   
    </div>
  );
}

export default Stuff;