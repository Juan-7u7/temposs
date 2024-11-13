import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Tu componente App
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de importar BrowserRouter

ReactDOM.render(
  <Router>  {/* Aquí envuelves la aplicación con Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
