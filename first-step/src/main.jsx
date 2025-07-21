import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your main App component
import './App.css'; // Import your consolidated CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* */}
    <App /> {/* Renders your main App component */}
  </React.StrictMode>,
);