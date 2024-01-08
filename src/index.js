import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components home/home';

function WCommerce() {
  return(
    <BrowserRouter>
      < Home />
    </BrowserRouter>
  )
}

const about = ReactDOM.createRoot(document.getElementById('root'));
about.render(< WCommerce />);