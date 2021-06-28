import { Auth } from 'aws-amplify';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import PrivateLayout from './shared/components/layout/PrivateLayout';
import loadable from './shared/utils/loadable';
import GuardRoute from '#/shared/routes/GuardRoute';

const PrivateRoute = () => {
  const history = useHistory();
  const logout = () => {
    Auth.signOut();
    history.push('./login');
  };

  return (
    <PrivateLayout
      logout={logout}
      userInfo={{
        fullName: 'Thai Son',
      }}
    >
      <Switch>
        <Route path="/" component={loadable(import('./pages/Dashboard'))} />
      </Switch>
    </PrivateLayout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <GuardRoute
          path="/login"
          component={loadable(import('./pages/Login'))}
          exact
        />
        <GuardRoute isPrivate path="/" component={PrivateRoute} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
