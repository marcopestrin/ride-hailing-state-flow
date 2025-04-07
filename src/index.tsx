import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa 'react-dom/client' per React 18+
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
