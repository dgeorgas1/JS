import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

const fruits = ["Apple", "Grape", "Orange", "Peach", "Pear"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App condition={true} fruits={fruits}/>
);