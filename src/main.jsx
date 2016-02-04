import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

function render(element, props) {
  return ReactDOM.render(<App {...props} locale="en-US"/>, element);
}

render(document.body, { title: 'Hello World!' });
