import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import UserSidebar from './UserSidebar';
import Overview from './Overview';
import AddJob from './AddJob';
import Category from './Category';
import Profile from './Profile';
import Setting from './Setting';
 
class UserDashboard extends Component {

	render() {
		return (
			<React.Fragment>
				<Router>
					<div>
						<Navbar />
						<div className="sidenav">
							<UserSidebar />
						</div>
						<div className="container" id="main">
							<div className="row">
								<div className="col-12">				
									<Switch>
										<Route exact path={`/dashboard`} component={ Overview } />
							           	<Route path={`/dashboard/profile`} component={ Profile } />
							           	<Route path={`/dashboard/blogs`} component={ Profile } />
							           	<Route path={`/dashboard/category`} component={ Category } />
						 		        <Route path={`/dashboard/job`} component={ AddJob } /> 
						 		        <Route path={`/dashboard/setting`} component={ Setting } />
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

export default UserDashboard;