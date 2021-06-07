import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import style from './App.module.css';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const Register = lazy(() =>
  import('./views/Register/Register.js' /* webpackChunkName: "movies-page" */),
);
const Login = lazy(() =>
  import('./views/Login/Login.js' /* webpackChunkName: "not-found-view" */),
);
const Contacts = lazy(() =>
  import(
    './views/Contacts/Contacts.js' /* webpackChunkName: "movie-details-page" */
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
        <Route path={routes.contacts} component={Contacts} />
      </Switch>
    </Suspense>
    {/* <div className={style.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div> */}
  </>
);

export default App;
