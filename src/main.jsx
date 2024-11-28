import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Make sure App is correctly imported

// Ensure the element with id 'root' exists in your index.html
createRoot(document.getElementById('root')).render(
  <StrictMode basename="/CatholicRosaryApp">
    <App />
  </StrictMode>,
);
