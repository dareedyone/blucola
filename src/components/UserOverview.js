import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserOverview extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid pt-3">
				<h3 className="text-lead"><strong>My Dashboard</strong></h3>
					<h5 className="text-lead">Profile</h5>
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<p>Full Name : Dev K. David </p>
									<p>Email : kdavid@devmail.com</p>
									<p>Phone Number : 12345678901</p>
									<div className="text-center">
										<button className="btn moreBtn"><Link to={`admin/profile`} className="text-white">Update Profile</Link></button>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<hr className="bg-secondary"></hr>
					<h5 className="text-lead">Overview</h5>
					<div className="row">
						<div className="col-4">
							<div className="card admincard">
								<div className="card-body"><span className="fa fa-sign-out-alt">Workers</span><span className="float-right text-white">7</span></div>
							</div>
						</div>
						<div className="col-4">
							<div className="card admincard">
								<div className="card-body"><span className="fa fa-sign-out-alt float-left">Jobs</span><span className="float-right text-white">10</span></div>
							</div>
						</div>
						<div className="col-4">
							<div className="card admincard">
								<div className="card-body"><span className="fa fa-sign-out-alt float-left">Comments</span><span className="float-right text-white">10</span></div>
							</div>
						</div>
					</div>
					<hr className="bg-secondary"></hr>
					<div className="row mb-3">
						<h5>Post Comments</h5>
						<div className="col-12">
							<form className="form">
								<div className="form-group">
									<input type="email" className="form-control" name="email" placeholder="Your Email"/>
								</div>
								<div className="form-group">
									<textarea className="form-control" placeholder="Write Something Here........."></textarea>
								</div>
								<button className="moreBtn float-right text-white">Post</button>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default UserOverview;