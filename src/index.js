import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Imports Bootstrap CSS (installed bootstrap in terminal)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Get the root element from your HTML file (usually in public/index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);