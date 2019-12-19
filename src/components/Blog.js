import React, { Component } from 'react';

class Blog extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-4">	
								</div>
								<div className="col-8 p-3">
									<h5>SQI Beta Graduation Ceremony</h5>
									<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
									<button className="btn btn-primary">Read More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>			
		);
	}
}

export default Blog;