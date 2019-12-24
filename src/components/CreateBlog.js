import React, { Component } from 'react';
import Blogs from './Blogs';

class CreateBlog extends Component {
	
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col mx-auto">
							<div className="card">
								<div className="card-body p-3">
									<h4 className="text-lead text-center">Add New Blog</h4>
									<form className="form p-3">
										<div className="form-group mx-auto">
											<label>Title</label>
											<input type="text" name="title" placeholder="Title" className="form-control" />
											<small className="float-right text-success">20 characters remainng</small>
										</div>
										<div className="form-group mx-auto">
											<label>Description</label>
											<textarea name="blog" className="form-control" value="Write your Story Here..."></textarea>
											<small className="float-right text-success">500 characters remaining</small>
										</div>
										<div className="form-group mx-auto">
											<label>Posting Time:   </label>
											<select>
												<option>Post Now</option>
												<option>After 1hr</option>
												<option>After 24hrs</option>
												<option>After 1Wk</option>
											</select>
											<button className="btn btn-primary form-control">Create Blog</button>
										</div>
									</form>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<Blogs/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CreateBlog;