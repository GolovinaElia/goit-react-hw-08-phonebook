import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const Register = lazy(() =>
  import('./views/Register/Register.js' /* webpackChunkName: "register" */),
);
const Login = lazy(() =>
  import('./views/Login/Login.js' /* webpackChunkName: "login" */),
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
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.contacts} component={ContactsView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
