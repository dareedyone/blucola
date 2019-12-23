import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
	render() {
		return (
			<div className="container-fluid">
				<h3 className="text-center mt-2">Category</h3>
				<div className="row">
					<div className="col card shadow">
						<div className="card-body">
							<h5 className="text-lead">New Category</h5>
							<small className="text-success mb-2">You have successfully added to the list</small>
							<form className="form-inline">
								<div className="form-group">
									<input type="text" className="form-control m-1" name="category" placeholder="Add New Category" 
									/>
								</div>
								<div className="form-group">
									<input type="number" className="form-control m-1" placeholder="Number of Workers"/>
								</div>
								<div className="form-group">
									<input type="number" className="form-control m-1" placeholder="Jobs Done"/>
								</div>
								<button type="submit" className="btn moreBtn bg-success text-white mx-auto">Add to List</button>
							</form>
						</div>
					</div>
				</div>
				<hr/>
				<div className="row mt-1">
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h5>Computer/ICT</h5>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn moreBtn mx-auto"><Link to="/admin/participant" className="text-white">More</Link></span>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h5>Education</h5>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Job</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn moreBtn mx-auto"><Link to="/admin/users" className="text-white">More</Link></span>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h5>Electrical</h5>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn moreBtn mx-auto"><Link to="/admin/contributor" className="text-white">More</Link></span>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h5>Housing</h5>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn moreBtn mx-auto"><Link to="/admin/participant" className="text-white">More</Link></span>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h5>Mechanical</h5>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Job</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn moreBtn mx-auto"><Link to="/admin/users" className="text-white">More</Link></span>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h5>Consultancy</h5>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn moreBtn mx-auto"><Link to="/admin/contributor" className="text-white">More</Link></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Category;