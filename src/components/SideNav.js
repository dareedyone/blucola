import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
	render() {
		return (
			<div>
				<ul className="nav flex-column text-center">
					<li className="nav-item sidelink">
						<Link to={`/admin/profile`} className="text-white">
							<i className="h4 fa fa-user mx-auto"><span className="tooltext h5 text-center">Profile</span></i>
						</Link>
					</li>
					<li className="nav-item sidelink">
						<Link to={`/admin/workers`} className="text-white">
							<i className="h4 fa fa-users mx-auto"><span className="tooltext h5 tex t-center">Workers</span></i>
						</Link>
					</li>
					<li className="nav-item sidelink">
						<Link to={`/admin/users`} className="text-white">
							<i className="h4 fa fa-pager mx-auto"><span className="tooltext h5 text-center">Users</span></i>
						</Link>
					</li>
					<li className="nav-item sidelink">
						<Link to={`/admin/category`} className="text-white">
							<i className="h4 fa fa-luggage-cart mx-auto"><span className="tooltext h5 text-center">Category</span></i>
						</Link>
					</li>
					<li className="nav-item sidelink">
						<Link to={`/admin/setting`} className="text-white">
							<i className="h4 fa fa-tools mx-auto"><span className="tooltext h5 text-center">Setting</span></i>
						</Link>
					</li>
					<li className="nav-item sidelink">
						<Link to={`/login`} className="text-white">
							<i className="h4 fa fa-sign-out-alt mx-auto"><span className="tooltext h5 text-center">Sign Out</span></i>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default SideNav;