import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './page';
import Contact from "./contact";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
    <Contact/>
  </React.StrictMode>
);
