import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './mdb.min.css';
import Routes from './Routes';

// import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

 


ReactDOM.render(
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

