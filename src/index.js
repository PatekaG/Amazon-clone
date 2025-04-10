import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from './context/authContext';
import { ShoppingState } from './context/shopping/ShoppingState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ShoppingState>
        <App />
        </ShoppingState>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
