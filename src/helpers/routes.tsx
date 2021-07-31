import { Redirect, Route } from 'react-router-dom';

export function IsUserRedirect({
  user,
  loggedInPath,
  path,
  exact,
  children,
}: {
  user: Object;
  loggedInPath: string;
  path: string;
  exact?: boolean;
  children: JSX.Element;
}) {
  return (
    <Route
      path={path}
      exact
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({
  user,
  path,
  children,
}: {
  user: Object;
  path: string;
  children: JSX.Element;
}) {
  return (
    <Route
      path={path}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect to={{ pathname: 'signin', state: { from: location } }} />
          );
        }
        return null;
      }}
    />
  );
}
