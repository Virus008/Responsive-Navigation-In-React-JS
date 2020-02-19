import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';

ReactDOM.render(<Header />, document.getElementById('root'));

serviceWorker.unregister();
