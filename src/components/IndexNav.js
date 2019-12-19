import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IndexNav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark shadow-lg sticky-top mynav">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand"><span className="h4">BLUCOLA</span></Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					    <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">	
						<ul className="navbar-nav">
	 						<li className="nav-item ml-2 mr-3">
	 							<Link to="/" className="fa fa-home">Home</Link>
	 						</li>
	 						<li className="nav-item mr-3">
	 							<Link to="/blogs" className="fa fa-blog">Blogs</Link>
	 						</li>
	 						<li className="nav-item mr-3">
	 							<Link to="/about" className="fa fa-users">About Us</Link>
	 						</li>
	 						<li className="nav-item dropdown mr-3">
	 							<Link to="/" className="dropdown-toggle fa fa-layer-group" data-toggle="dropdown">Categories</Link>
							    <div className="dropdown-menu">
							      	<Link to="/login" className="dropdown-item">Computer/ICT</Link>
							      	<Link to="/login" className="dropdown-item">Consultancy</Link>
							      	<Link to="/login" className="dropdown-item">Education</Link>
							      	<Link to="/login" className="dropdown-item">Electrical</Link>
							      	<Link to="/login" className="dropdown-item">Housing</Link>
							      	<Link to="/login" className="dropdown-item">Mechanical</Link>
							    </div>
	 						</li>
	 						<li className="nav-item dropdown mr-3">
	 							<Link to="/" className="dropdown-toggle fa fa-arrow-right" data-toggle="dropdown">More</Link>
							    <div className="dropdown-menu">
							      	<Link to="/contact" className="dropdown-item">Contact Us</Link>
							    </div>
	 						</li>
	 					</ul>
	 					<ul className="navbar-nav ml-auto">
	 						<li className="nav-item dropdown">
	 							<Link to="/" className="dropdown-toggle fa fa-user" data-toggle="dropdown">Login</Link>
							    <div className="dropdown-menu">
							      	<Link to="/login" className="dropdown-item">Login</Link>
							      	<Link to="/register" className="dropdown-item">Sign Up</Link>
							    </div>
	 						</li>
	 					</ul>
	 				</div>
	 			</div>  
			</nav>
		);
	}
}

export default IndexNav;