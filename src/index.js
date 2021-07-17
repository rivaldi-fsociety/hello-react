/**
 * @author M. Rivaldi Irawan <>
 * @file Description
 * @desc Created on 2021-07-17 11:54:03 pm
 * @copyright APPI SASU
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import TopNavbarComp from './component/LandingPageComponent/TopNavbarComp';
import Home from './container/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
