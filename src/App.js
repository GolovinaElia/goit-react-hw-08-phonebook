import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView.js' /* webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView.js' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView.js' /* webpackChunkName: "contacts-view" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={routes.registerView} component={RegisterView} />
        <Route path={routes.loginView} component={LoginView} />
        <Route path={routes.contacts} component={ContactsView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
