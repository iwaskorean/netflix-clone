import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById('root')
);
