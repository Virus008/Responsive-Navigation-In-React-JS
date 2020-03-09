import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import Navigation1 from './components/Navigation1';
import Navigation2 from './components/Navigation2';
// import Navigation3 from './components/Navigation3';


// ReactDOM.render(<Header />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Navigation1 />, document.getElementById('root'));
ReactDOM.render(<Navigation2 />, document.getElementById('root'));
// ReactDOM.render(<Navigation3 />, document.getElementById('root'));

serviceWorker.unregister();



