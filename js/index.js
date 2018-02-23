// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const element = document.getElementById('app');
if (!element) {
  throw new Error("Couldn't find '#app' element");
}

ReactDOM.render(React.createElement(App), element);
