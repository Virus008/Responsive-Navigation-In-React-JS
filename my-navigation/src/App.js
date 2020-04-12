import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
	render() {
		return(
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello, welcome to demo of React Rounting with Responsive Navigation using </p>
						<ol style={{textAlign: 'left'}}>
							<li>Browser Routing</li>
							<li>Hash Routing</li>
							<li>Memory Routing</li>
						</ol>
				</header>
    		</div>
		);
	}
}

export default App;