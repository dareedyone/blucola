import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row mt-4">
					<div className="col-6">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h4>Computer/ICT</h4>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn btn-primary mx-auto"><Link to="/admin/participant" className="text-white">More Info</Link></span>
							</div>
						</div>
					</div>
					<div className="col-6">
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
								<span className="btn btn-primary mx-auto"><Link to="/admin/users" className="text-white">More Info</Link></span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card shadow-lg mt-2">
							<div className="card-body text-center">
								<h4>Electrical</h4>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">2000</div>
								</div>
								<span className="btn btn-primary mx-auto"><Link to="/admin/contributor" className="text-white">More Info</Link></span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card shadow-lg">
							<div className="card-body text-center">
								<h4>Housing</h4>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn btn-primary mx-auto"><Link to="/admin/participant" className="text-white">More Info</Link></span>
	http://localhost:3000/dashboard/blogs						</div>
						</div>
					</div>
					<div className="col-6">
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
								<span className="btn btn-primary mx-auto"><Link to="/admin/users" className="text-white">More Info</Link></span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card shadow-lg mt-2">
							<div className="card-body text-center">
								<h4>Consultancy</h4>
								<div className="row mb-3">
									<div className="col-6">Workers</div>
									<div className="col-6">100</div>
								</div>
								<div className="row mb-3">
									<div className="col-6">Jobs</div>
									<div className="col-6">200</div>
								</div>
								<span className="btn btn-primary mx-auto"><Link to="/admin/contributor" className="text-white">More Info</Link></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Category;