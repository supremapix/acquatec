import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const helmetContext = {};

const app = (
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// We use createRoot directly because in this environment the HTML is empty (not pre-rendered).
// Attempting to hydrate an empty container with content that uses useId (like HelmetProvider) 
// causes React Error #525 (hydration mismatch).
const root = ReactDOM.createRoot(rootElement);
root.render(app);

// Register Service Worker
serviceWorkerRegistration.register();