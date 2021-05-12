import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import ProjectState from './context/project/ProjectState';

ReactDOM.render(
  <AuthState>
    <AlertState>
      <ProjectState>
        <App />
      </ProjectState>
    </AlertState>
  </AuthState>,
  document.getElementById('root')
);
