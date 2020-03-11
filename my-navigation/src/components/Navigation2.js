import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

let IndexPage = () => {
	return (
		<Home></Home>
	);
};

let AboutPage = () => {
	return(
		<About></About>
	);
};

let ContactPage = () => {
	return(
		<Contact></Contact>
	);
};

class Navigation2 extends Component {
  render() { 
	return (
      	<div>
			<Router>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<Link to="/" class="navbar-brand">Virus008</Link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="mynav">
							<div class="navbar-nav">
								<Link class="nav-item nav-link" to="/about">About </Link>
								<Link class="nav-item nav-link" to="/contact">Contact </Link>								
							</div>
						</div>
					</div>
				</nav>
				<br></br>
				<div className="content">
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/about" component={About}></Route>
				<Route exact path="/contact" component={Contact}></Route>
				</div>
			</Router>
		</div>
	  )
  }
}


export default Navigation2;