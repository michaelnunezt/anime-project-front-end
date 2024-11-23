import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS at the top
import './index.css'; // Import your custom styles after Bootstrap
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>

);
