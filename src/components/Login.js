import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IndexNav from './IndexNav';

class Login extends Component {

	render() {
		return (
			<React.Fragment>
				<IndexNav />
				<div className="container mt-5">
					<div className="row">
						<div className="col-md-6 col-lg-5 col-9 mx-auto p-2">
							<div className="card shadow-lg">
								<div className="card-body">
									<h4 className="text-lead text-primary text-center mb-3">Login Page</h4>
									<form className="form">
										<div className="form-group mb-4">
											<input type="text" className="form-control" placeholder="Your email or phone number"/>
										</div>
										<div className="form-group mb-4">
											<input type="password" className="form-control" placeholder="Password here"/>
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-block btn-success">Login</button>
											<p className="mt-1"><em>Not registered? </em><Link to="/register"> Click to Register >> </Link></p>
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

export default Login;