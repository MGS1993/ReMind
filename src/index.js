import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes'
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD1S7Br9WPSPA4hUvi3JwBbF4BRDCJpaIM",
  authDomain: "remind-f912b.firebaseapp.com",
  databaseURL: "https://remind-f912b.firebaseio.com",
  projectId: "remind-f912b",
  storageBucket: "remind-f912b.appspot.com",
  messagingSenderId: "1076661908083",
  appId: "1:1076661908083:web:329fe20ee44608147df006",
  measurementId: "G-8H560TK04K"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
