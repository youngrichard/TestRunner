import React from 'react';
import ReactDOM from 'react-dom';
import TestRunner from './TestRunner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRunner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
