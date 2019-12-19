import React, { Component } from                                                                                                                            'react';

class AddJob extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-8 col-sm-10 mx-auto">
							<div className="card shadow p-3">
								<div className="card-body">
									<div className="text-center">
										<h4>Add Your Job</h4>
										<p><em>You can add any project, jobs you want to get done.</em></p>
									</div>
									<h6>Jobs Profile</h6>
									<form className="form">
										<div className="form-group">
											<label>Job Title </label>
											<input type="text" name="title" placeholder="The title of your Job" className="form-control" />
										</div>
										<div className="form-group">
											<label>Full Name </label>
											<input type="text" name="name" placeholder="Your Full Name" className="form-control" />
										</div>
										<div className="form-group">
											<label>Time Range </label>
											<input type="text" name="time" placeholder="Time schedule for Job completion, e.g 4 weeks, 10 weeks" className="form-control" />
										</div>
										<div className="form-group">
											<label>Cost </label>
											<input type="text" name="name" placeholder="Expected Cost of the Project" className="form-control" />
										</div>
										<div className="form-group">
											<label>Description </label>
											<textarea className="form-control" placeholder="Describe the work in full details"></textarea>
										</div>
										<div className="form-group">
											<label>Job Category </label>
											<select name="category" className="form-control" placeholder="Choose Category">
												<option>Add Category</option>
												<option>Computer/ICT</option>
												<option>Education</option>
												<option>Building</option>
												<option>Electrical</option>
												<option>Mechanical</option>
												<option>Consultancy</option>
											</select>
										</div>
										<div className="form-group">
											<label>Add Workers</label>
											<select name="worker" className="form-control" placeholder="Choose Worker">
												<option>Worker</option>
											</select>
										</div>
										<div className="form-group">
											<label>Payment Method</label><br/>
											<div class="form-check-inline">
												<label class="form-check-label">
													<input type="radio" class="form-check-input" name="optradio"/> Visa
												</label>
											</div>
											<div class="form-check-inline">
												<label class="form-check-label">
												    <input type="radio" class="form-check-input" name="optradio"/> Verve
												</label>
											</div>
											<div class="form-check-inline">
												<label class="form-check-label">
												    <input type="radio" class="form-check-input" name="optradio" /> Master Card
												</label>
											</div>
										</div>
										<div className="form-group">
											<button className="btn btn-primary form-control">Submit</button>
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

export default AddJob;