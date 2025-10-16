// main.tsx - Its ONLY job is to start the app.
import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from '../../components/Popup.tsx'; // Imports the main component

// Renders the <Popup /> component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);