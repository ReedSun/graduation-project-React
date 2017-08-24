import React from 'react';
import ReactDOM from 'react-dom';
import headerImg from './balloon.png'
import './hello_world.css';

ReactDOM.render(
  <div className="main">
    <img src={headerImg} className="header" alt="balloon" />
    <h1 className="title">Hello, world!</h1>
    <p className="desp">Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
  </div>,
  document.getElementById('root')
)
