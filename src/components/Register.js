import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IndexNav from './IndexNav';

class Register extends Component {

	render() {
		return (
			<React.Fragment>
				<IndexNav />
				<div className="container mt-3">
					<div className="row">
						<div className="col-md-6 mx-auto">
							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="text-lead text-center text-primary">Register Here</h4>
									<em className="small text-center">Welcome to this platform, Fill this form to register</em>
									<form className="form m-2">
										<div className="row">
											<div className="form-group mb-3 col-md-6">
												<input type="text" name="firstname" className="form-control" placeholder="Firstname"/>
											</div>
											<div className="form-group mb-3 col-md-6">
												<input type="text" name="lastname" className="form-control" placeholder="Lastname"/>
											</div>
											<div className="form-group mb-3 col-12">
												<input type="email" name="email" className="form-control" placeholder="Email"/>
											</div>

											<div className="form-group mb-3 col-12">
												<input type="address" name="address" className="form-control" placeholder="Address"/>
											</div>
											<div className="form-group mb-3 col-12">
												<select className="form-control">
													<option>--Select Category--</option>
													<option>Participant</option>
												    <option>Client</option>
												    <option>Contributor</option>
												</select>
											</div>
											<div className="form-group col-12">
												<input type="password" name="password" className="form-control" placeholder="Password"/>
											</div>
										</div>
										<div className="form-group text-center">
											<button type="submit" className="btn btn-block btn-success">Register</button>
											<p><em>Are you a registered member? </em><Link to="/login"> Login Here </Link></p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Register;