import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestRunner from './TestRunner';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TestRunner />, document.getElementById('root'));
registerServiceWorker();
