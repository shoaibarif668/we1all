import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import App from './App';

//CSS
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/ionicons.min.css";
import "./css/font-awesome.min.css";
import "./css/PostStyle.css" 
import "react-toastify/dist/ReactToastify.css";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

