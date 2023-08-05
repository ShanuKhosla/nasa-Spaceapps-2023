import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Use ReactDOM.createRoot for Concurrent Mode rendering
const root = document.getElementById('root');
const rootElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Check if createRoot is available (React 18+)
if (ReactDOM.createRoot) {
  // Use createRoot for Concurrent Mode
  ReactDOM.createRoot(root).render(rootElement);
} else {
  // Fallback to render for React 16 and below
  ReactDOM.render(rootElement, root);
}
