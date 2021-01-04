import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const checklist = ['boots', 'tent', 'headlamp'];
const [mostImportantItem, second] = ['boots', 'tent', 'headlamp']; // destructuring array
const [, , light] = ['boots', 'tent', 'headlamp']; // skipping items
console.log('mostImportantItem', mostImportantItem);
console.log('second', second);
console.log('light', light);

ReactDOM.render(
  <App authorised={true}/>,
  document.getElementById('root')
);
 