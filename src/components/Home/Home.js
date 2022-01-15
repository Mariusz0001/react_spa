import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import './Home.css';

const Home = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {user}!</h2>
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
  );
}

export default Home;
