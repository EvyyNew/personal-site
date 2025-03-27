import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <HashRouter basename="/personal-site">
      <App />
    </HashRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}
