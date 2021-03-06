import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0Provider from './auth/Auth0Provider';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
