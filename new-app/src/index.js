import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Rednering Root as App: App's id is Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

