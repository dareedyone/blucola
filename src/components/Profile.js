import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="card border-0 mx-auto">
								<div className="card-body">
									<div className="card mx-auto">
										<div className="card-header"><h5><strong>Personal Information</strong></h5></div>
										<div className="card-body mx-auto">
										<p className="small tetext-center text-success"><em>Kindly fill in this boxes to update your profile</em></p>
											<div className="row">
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="text" className="form-control" name="username" placeholder="Username" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="text" className="form-control" name="firstname" placeholder="Firstname" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="text" className="form-control" name="lastname" placeholder="Lastname" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="text" className="form-control" name="othername" placeholder="Other Names" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="email" className="form-control" name="email" placeholder="Email" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="text" className="form-control" name="phonenumber" placeholder="Phone Number" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="text" className="form-control" name="gender" placeholder="Your Discipline" />
												</div>

												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="date" className="form-control" name="birthday" placeholder="Date of Birth" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<input type="url" className="form-control" name="myweb" placeholder="Website" />
												</div>
												<div className="form-group col-xs-12 col-sm-12 col-md-6">
													<textarea className="form-control" placeholder="Your Bio here"></textarea>
												</div>
											</div>
										</div>
											<div className="card-body mx-auto">
												<h5><strong>Location</strong></h5>
												<div className="row">
													<div className="form-group col-xs-12 col-sm-12 col-md-6">
														<input type="text" className="form-control" name="street" placeholder="Street No" />
													</div>
													<div className="form-group col-xs-12 col-sm-12 col-md-6">
														<input type="text" className="form-control" name="zipno" placeholder="Zip Code" />
													</div>
													<div className="form-group col-xs-12 col-sm-12 col-md-6">
														<input type="text" className="form-control" name="town" placeholder="Town" />
													</div>
													<div className="form-group col-xs-12 col-sm-12 col-md-6">
														<input type="text" className="form-control" name="city" placeholder="City" />
													</div>
													<div className="form-group col-xs-12 col-sm-12 col-md-6">
														<input type="text" className="form-control" name="state" placeholder="State" />
													</div>
													<div className="form-group col-xs-12 col-sm-12 col-md-6">
														<input type="text" className="form-control" name="country" placeholder="Country" />
													</div>
												</div>
											<input type="submit" className="form-control btn btn-outline-primary mt-3 mb-3" name="updatedValues"/>
											</div>
										</div>
									</div>
								</div>
							</div> 
						</div>
					</div>
				
			</React.Fragment>
		); 
	}
}
export default Profile