import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Browse, Home, SignIn, SignUp } from './pages';
import * as ROUTE from './constants/routes';

function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTE.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTE.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTE.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTE.SIGN_UP}>
          <SignUp />
        </Route>
      </Router>
    </>
  );
}

export default App;
