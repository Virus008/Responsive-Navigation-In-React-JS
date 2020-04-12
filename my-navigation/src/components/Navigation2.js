import React from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom';
import Home2 from './pages/Home2';
import About from "./pages/About";
import Contact from "./pages/Contact";

class Navigation2 extends React.Component {
  render() { 
	return (
      	<div>
			<Router>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<Link to="/" className="navbar-brand">Virus008</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav2" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="mynav2">
							<div className="navbar-nav">
								<Link className="nav-item nav-link" to="/about">About </Link>
								<Link className="nav-item nav-link" to="/contact">Contact </Link>								
							</div>
						</div>
					</div>
				</nav>
				<br></br>
				<div className="content">
					<Route exact path="/" component={Home2}></Route>
					<Route exact path="/about" component={About}></Route>
					<Route exact path="/contact" component={Contact}></Route>
				</div>
			</Router>
		</div>
	  );
  }
}


export default Navigation2;