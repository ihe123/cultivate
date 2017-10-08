import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import registerServiceWorker from './registerServiceWorker';
import {Icons} from './Constants.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
