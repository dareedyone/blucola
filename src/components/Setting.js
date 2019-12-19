import React, { Component } from 'react';

class Setting extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container w-60">
					<div className="row">
						<div className="col-7 mx-auto">
							<div className="card shadow mt-2">
								<div className="card-body">
									<h3 className="text-center">Update Password</h3>
									<p className="small text-primary"><em>You are free to change your password here</em></p>
									<form className="form">
										<div className="form-group">
											<input type="email" name="email" className="form-control" placeholder="Your Email" />
										</div>
										<div className="form-group">
											<input type="password" name="password1" className="form-control" placeholder="Your Password" />
										</div>
										<div className="form-group">
											<input type="password" name="password2" className="form-control" placeholder="Confirm Password" />
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-block btn-success">Change Password</button>
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

export default Setting;