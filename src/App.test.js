import React from 'react';
import ReactDOM from 'react-dom';
import CubeCalculator from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CubeCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
