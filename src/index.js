import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  React.createElement("h1",{style:{color:"blue"}},"Hello,World!"),
  document.getElementById('root')
);

ReactDOM.render(
  React.createElement("ul",null,
  React.createElement("li",null,"Monday"),
  React.createElement("li",null,"Tuesday"),
  React.createElement("li",null,"Wednesday"),
  React.createElement("li",null,"Thursday"),
  React.createElement("li",null,"Friday"),
  React.createElement("li",null,"Saturday"),
  ),
  document.getElementById('root')
);

ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
  </ul>,
  document.getElementById('root')
);