import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Header from './HeaderComponent.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header type="kent" age="12" />
    <App />
  </React.StrictMode>,
);
