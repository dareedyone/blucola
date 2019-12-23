import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';
import Overview from './Overview';
import Profile from './Profile';
import Workers from  './Workers';
import AddUser from './AddUser';
import Category from './Category';
import CreateBlog from './CreateBlog';
import Setting from './Setting';
 
class AdminDashboard extends Component {

	render() {
		return (
			<React.Fragment>
				<Router>
					<div>
						<Navbar />
						<div className="sidenav">
							<SideNav />
						</div>
						<div className="container" id="main">
							<div className="row">
								<div className="col-12">				
									<Switch>
										<Route exact path={`/admin`} component={ Overview } />
										<Route path={`/admin/profile`} component={ Profile } />
						 		        <Route path={`/admin/users`} component={ AddUser } />
						 		        <Route path={`/admin/category`} component={ Category } />
						 		        <Route path={`/admin/workers`} component={ Workers } />
						 		        <Route path={`/admin/blog`} component={ CreateBlog } />
						 		        <Route path={`/admin/setting`} component={ Setting } />
					        		</Switch>
								</div>
							</div>
						</div>
					</div>
				</Router>
			</React.Fragment>
		);
	}
}

export default AdminDashboard;