import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Update the import path for the App component
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
