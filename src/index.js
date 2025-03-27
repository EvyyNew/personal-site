import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; 
import App from './App';

const StrictApp = () => (
  <React.StrictMode>
    <HashRouter basename="/"> 
      <App />
    </HashRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  createRoot(rootElement).render(<StrictApp />);
}