import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storePersistor from './redux/store';
import Loader from './components/Loader/Loader';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storePersistor.store}>
      <PersistGate loading={<Loader />} persistor={storePersistor.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
