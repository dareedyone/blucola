import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Overview extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid pt-3">
					<h5 className="text-lead">Profile</h5>
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<p>Full Name : </p>
									<p>Email : </p>
									<p>Phone Number : </p>
									<div className="text-center">
										<button className="btn btn-primary"><Link to={`admin/profile`}>Update Profile</Link></button>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<hr className="bg-secondary"></hr>
					<h5 className="text-lead">Overview</h5>
					<div className="row">
						<div className="col-3">
							<div className="card admincard">
								<div className="card-body"><span className="fa fa-sign-out-alt">Messages</span></div>
							</div>
						</div>
						<div className="col-3">
							<div className="card">
								<div className="card-body"><span className="fa fa-sign-out-alt">Participants</span></div>
							</div>
						</div>
						<div className="col-3">
							<div className="card">
								<div className="card-body"><span className="fa fa-sign-out-alt">Users</span></div>
							</div>
						</div>
						<div className="col-3">
							<div className="card">
								<div className="card-body"><span className="fa fa-sign-out-alt">Views</span></div>
							</div>
						</div>
					</div>
					<hr className="bg-secondary"></hr>
					<div className="row">
						<div className="table">
							<table className="table table-striped">
								<tbody>
									<tr>
										<td><h5>Regions</h5></td>
										<td colSpan="3"><h5>Feeds</h5></td>
									</tr>
									<tr>
										<td rowSpan="7"><img src="" alt=""/></td>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">New record, over 90 views.</td>
										<td><p>10 mins</p></td>
									</tr>
									<tr>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">Database Error</td>
										<td><p>20 mins</p></td>
									</tr>
									<tr>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">New record, over 40 views.</td>
										<td><p>30 mins</p></td>
									</tr>
									<tr>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">New record, over 30 views.</td>
										<td><p>40 mins</p></td>
									</tr>
									<tr>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">New comments.</td>
										<td><p>50 mins</p></td>
									</tr>
									<tr>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">Check Transactions.</td>
										<td><p>55 mins</p></td>
									</tr>
									<tr>
										<td><span className="fa fa-envelope"></span></td>
										<td className="p">CPU overload.</td>
										<td><p>59 mins</p></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<hr className="bg-secondary"></hr>
					<div className="row">
						<div className="col-12">
							<h5>Countries</h5>
							<table className="table table-striped shadow">
								<tbody>
									<tr>
										<td>Nigeria</td>
										<td>30%</td>
									</tr>
									<tr>
										<td>USA</td>
										<td>20</td>
									</tr>
									<tr>
										<td>UK</td>
										<td>15%</td>
									</tr>
									<tr>
										<td>China</td>
										<td>15%</td>
									</tr>
									<tr>
										<td>India</td>
										<td>10%</td>
									</tr>
								</tbody>
							</table>
							<button className="btn btn-lg btn-secondary">More Countries<span className="fa fa-sign-out-alt ml-1"></span></button>
						</div>
					</div>
					<hr className="bg-secondary"></hr>
					<div className="row">
						<h5>Recent Users</h5>
						<table className="table table-striped border-none shadow-lg">
							<tbody>
								<tr>
									<td><img src=""alt="" className="rounded-circle mr-3" height="20px" width="20px"/>Mike</td>
								</tr>
								<tr>
									<td><img src=""alt="" className="rounded-circle mr-3" height="20px" width="20px"/>Jill</td>
								</tr>
								<tr>
									<td><img src=""alt="" className="rounded-circle mr-3" height="20px" width="20px"/>Jane</td>
								</tr>
							</tbody>
						</table>
					</div>
					<hr className="bg-secondary"></hr>
					<div className="row">
						<h5>Recents Comments</h5>
						<div className="media border p-3">
							<img src="" alt="" className="mr-5 mt-1 rounded adminimg"/>
							<div className="media-body">
							    <h4 className="mr-2">John Doe <small><i>Sep 29, 2019, 9:12 PM</i></small></h4>
							    <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
						<div className="media border p-3">
							<img src="" alt="" className="mr-5 mt-1 rounded adminimg"/>
							<div className="media-body">
							    <h4 className="mr-2">Bo <small><i>Sep 28, 2019, 10:00 PM</i></small></h4>
							    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Overview;