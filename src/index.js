import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { Global } from '@emotion/react';
import reset from './global/reset';
import { AuthProvider } from './context/AuthContext';
import AuthService from './service/auth';
import TokenStorage from './util/token';
import MainRouter from './router/MainRouter';


const BASE_URL = process.env.REACT_APP_BASE_URL
const tokenStorage = new TokenStorage();
const authService = new AuthService(BASE_URL, tokenStorage);
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    <Global styles={reset} />
    <AuthProvider
      authService={authService}
    >
      <MainRouter />
    </AuthProvider>
  </>
);

// CRA - CREATE REACT APP

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
