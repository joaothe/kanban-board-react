import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KanbanProject from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KanbanProject />, document.getElementById('root'));
registerServiceWorker();
