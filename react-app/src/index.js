import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import './assets/styles/reset.css';
import './assets/styles/vars.css';
import './assets/styles/util.css';
import './assets/styles/typography.css';
import App from './App';

const loadingMarkup = (
  <p>Loading...</p>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
