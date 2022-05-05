import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/reset.css';
import './assets/styles/vars.css';
import './assets/styles/util.css';
import './assets/styles/typography.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
