import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation1 from './components/Navigation1';


ReactDOM.render(<Navigation1 />, document.getElementById('root'));

serviceWorker.unregister();



