import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your main App component
import './App.css'; // Import your consolidated CSS file
import { Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* */}
    <App /> 
  </React.StrictMode>,
);