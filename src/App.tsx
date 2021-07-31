import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Browse, Home, SignIn, SignUp } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';

function App() {
  const user = {};
  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
            exact
          >
            <SignIn />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
            exact
          >
            <SignUp />
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
