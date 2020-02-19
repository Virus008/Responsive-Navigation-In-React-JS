import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<p>Hello, welcome to demo of Responsive Navigation in React JS using </p>
        <ul>
          <li>Basic Routing</li>
          <li>Hash Routing</li>
          <li>Memory Routing</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
