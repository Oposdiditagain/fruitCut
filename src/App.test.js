import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const screen = document.querySelector('.screen');
  ReactDOM.render(<App />, screen);
});
