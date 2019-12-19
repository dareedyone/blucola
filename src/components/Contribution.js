import React, { Component } from 'react';

class Contributor extends Component {
	
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col mx-auto">
							<h2 className="text-center mt-2">Contributor</h2>
							<div className="card border-0 shadow routeCard">
								<div className="card-body mx-auto">
									<form className="form-inline">
										<div className="form-group">
											<input className="form-control mr-4" 
												name="contributor"
												placeholder="Add Contributor" 
											/>
										</div>
										<div className="form-group">
											<input className="form-control mr-4" 
												name="job"
												placeholder="Add Type" 
											/>
										</div>
										<button type="submit" className="btn btn-success ml-3">Add to List</button>
									</form>
									<small className="text-success text-center">Added Successfully</small>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-body">
											<table className="table table-responsive table-striped">
												<thead>
													<tr>
														<th>S/N</th>
														<th>Name</th>
														<th>Specification</th>
														<th>Av. Rating</th>
														<th>Payment</th>
														<th>Operation</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Tutor T</td>
														<td>Project Super</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
													<tr>
														<td>2</td>
														<td>Atom Script</td>
														<td>Function</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
													<tr>
														<td>3</td>
														<td>Black Gee</td>
														<td>Front</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash -warning"></span></td>
													</tr>
													<tr>
														<td>4</td>
														<td>W. Thug CSC</td>
														<td>Function</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
													<tr>
														<td>5</td>
														<td>Emeka Riddick</td>
														<td>Back</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
													<tr>
														<td>6</td>
														<td>Dave</td>
														<td>Front</td>
														<td>5 stars<span className="fa fa-grin-stars"></span></td>
														<td>No</td>
														<td><span className="fa fa-trash text-danger "></span></td>
													</tr>
												</tbody>
											</table>
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

export default Contributor;