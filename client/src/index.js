import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';

ReactDOM.render(
  <AuthState>
    <AlertState>
      <App />
    </AlertState>
  </AuthState>,
  document.getElementById('root')
);
