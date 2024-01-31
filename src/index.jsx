/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'lightbox2/dist/js/lightbox-plus-jquery.js';
import 'lightbox2/dist/css/lightbox.css';
import 'aos/dist/aos.css';
import './style/style.scss';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
