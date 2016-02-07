import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

function render(element, props) {
  return ReactDOM.render(<App {...props} locale="en-US"/>, element);
}

let element = document.createElement('div');
document.body.appendChild(element);
render(element, { title: 'Hello World!' });
