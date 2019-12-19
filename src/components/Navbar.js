import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	
	// ComponentDidMount() {
	// 	$(window).scroll(function(){
	// 		$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
	// 	});
	// }

	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark shadow-lg sticky-top">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand"><span className="h4">BLUCOLA</span></Link>
						<ul className="navbar nav">
	 						<li className="nav-item mr-2">
			    				<input type="text" id="searcher" name="search" placeholder="Search.." />
			    			</li>
	 						<li className="nav-item">
	 							<Link to="/dashboard" className="dropdown-toggle h5 fa fa-user" data-toggle="dropdown"></Link>
							    <div className="dropdown-menu">
							      <Link to="/profile" className="dropdown-item">Profile</Link>
							      <Link to="/change" className="dropdown-item">Change Password</Link>
							      <Link to="/login" className="dropdown-item">Sign out</Link>
							    </div>
	 						</li>
	 					</ul>
  
				</div>

			</nav>
		);
	}
}

export default Navbar;