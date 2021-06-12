import React, { Suspense, lazy, Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Copyright from './components/Material-UI/Copyright';

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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <PublicRoute
              path={routes.registerView}
              component={RegisterView}
              restricted
              redirectTo={routes.contactsView}
            />
            <PublicRoute
              path={routes.loginView}
              component={LoginView}
              restricted
              redirectTo={routes.contactsView}
            />
            <PrivateRoute
              path={routes.contactsView}
              component={ContactsView}
              redirectTo={routes.loginView}
            />
          </Switch>
        </Suspense>
        <Copyright />
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
