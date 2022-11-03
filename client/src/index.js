import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import storage from './redux/store'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {storage}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);


