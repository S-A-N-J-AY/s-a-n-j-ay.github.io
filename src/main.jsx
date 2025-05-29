import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS animations
AOS.init({
  duration: 800, // animation duration
  once: true     // animation runs once only
});

// ⚠️ Don't wrap in <React.StrictMode> while testing AOS
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
