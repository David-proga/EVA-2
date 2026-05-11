import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext'; // Importa el proveedor

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider> {/* Envuelve aquí */}
      <App />
    </AppProvider>
  </React.StrictMode>
);