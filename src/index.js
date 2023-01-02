import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const heroes = require('./json/heroes.json');
const skills = require('./json/skills.json');

root.render(
  <React.StrictMode>
    <App heroes={heroes} skills={skills}/>
  </React.StrictMode>
);
