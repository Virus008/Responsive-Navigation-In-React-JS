import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation3 from './components/Navigation3';;

ReactDOM.render(<Navigation3 />, document.getElementById('root'));

serviceWorker.unregister();

// Render the Component
// Navigation 1 for Browser Router
// Navigation 2 for Hash Router
// Navigation 3 for Memoru Router
