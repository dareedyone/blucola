import React, { Component } from 'react';

class AddUser extends Component {
	
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col mx-auto">
							<h1 className="text-center">Clients</h1>
							<div className="card border-0 shadow">
								<div className="card-body mx-auto">
									<form className="form-inline">
										<div className="form-group">
											<input className="form-control mr-4" 
												name="clients"
												placeholder="Add Client" 
											/>
										</div>
										<button type="submit" className="btn btn-success ml-3">Add to List</button>
									</form>
									<small className="text-success">Added Successfully</small>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="table">
								<table className="table table-responsive table-striped">
									<thead>
										<tr>
											<th>S/N</th>
											<th>Name</th>
											<th>Work Type</th>
											<th>Duration</th>
											<th>Comments</th>
											<th>Payment</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Tutor T</td>
											<td>Project Super</td>
											<td>2</td>
											<td>Yeah yeah</td>
											<td>No</td>
											<td><span className="fa fa-trash text-danger"></span></td>
										</tr>
										<tr>
											<td>2</td>
											<td>Atom Script</td>
											<td>Function</td>
											<td>2</td>
											<td>Yeah yeah</td>
											<td>No</td>
											<td><span className="fa fa-trash text-danger"></span></td>
										</tr>
										<tr>
											<td>3</td>
											<td>Black Gee</td>
											<td>Front</td>
											<td>2</td>
											<td>Yeah yeah</td>
											<td>No</td>
											<td><span className="fa fa-trash text-danger"></span></td>
										</tr>
										<tr>
											<td>4</td>
											<td>W. Thug CSC</td>
											<td>Function</td>
											<td>2</td>
											<td>Yeah yeah</td>
											<td>No</td>
											<td><span className="fa fa-trash text-danger"></span></td>
										</tr>
										<tr>
											<td>5</td>
											<td>Emeka Riddick</td>
											<td>Back</td>
											<td>2</td>
											<td>Yeah yeah</td>
											<td>No</td>
											<td><span className="fa fa-trash text-danger"></span></td>
										</tr>
										<tr>
											<td>6</td>
											<td>Dave</td>
											<td>Front</td>
											<td>2</td>
											<td>Yeah yeah</td>
											<td>No</td>
											<td><span className="fa fa-trash text-danger"></span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

				</div>
			</React.Fragment>
		);
	}
}

export default AddUser;