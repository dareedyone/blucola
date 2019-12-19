import React, { Component } from 'react';
import './assets/index.css';

class Display extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid" id='disp'>
		            <div className="row">
		                <div className="col-12 text-center text-white mt-5">
		                	<div className="row" id='indexrow'>
		                		<div className="col-10 mx-auto">
		                			<h2 className="mt-2 mb-3">Provides Expert Services</h2>
		                			<h4 className="mb-3">Join our list of Distinguished Clients</h4>
		                			<h6>Join now experience an excellent project</h6>
		                  			<button type="button" className="text-white mt-3" id="mybtn">Click to Join</button>	
		                		</div>
		                	</div>
		                </div>
		            </div>
		        </div>
		        <div className="container">
		        	<div className="row mx-auto cat">
		        		<div className="col-12">
		        			<h3 className="text-center text-lead">Categories</h3>
		        		</div>
		        		<div className="row m-2">
			        		<div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
			        			<div className="row">
			        				<div className="col-3">
			        					<i className="h3 fa fa-chalkboard-teacher"></i>
			        				</div>
			        				<div className="col-9">
			        					<h5 className="text-center">Education</h5>
			        					<p className="text-lead m-2">Engages in Academic Training, Programmes and Workshop</p>
			        				</div>
			        			</div>
			        		</div>
			        		<div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
			        			<div className="row">
			        				<div className="col-3">
			        					<i className="h3 fa fa-laptop"></i>
			        				</div>
			        				<div className="col-9">
				        				<h5 className="text-center">Computer/ICT</h5>
				        				<p className="text-lead m-2">Performs Software, Website Security and development</p>
			        				</div>
			        			</div>
			        		</div>
			        		<div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
			        			<div className="row">
			        				<div className="col-3">
			        					<i className="h3 fa fa-network-wired"></i>
			        				</div>
			        				<div className="col-9">
			        					<h5 className="text-center">Electrical</h5>
				        				<p className="text-lead m-2">Provides Services in Electrical and electronic Engineering</p>
			        				</div>
			        			</div>
			        		</div>
			        		<div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
			        			<div className="row">
			        				<div className="col-3">
			        					<i className="h3 fa fa-toolbox"></i>
			        				</div>
			        				<div className="col-9">
			        					<h5 className="text-center">Mechanical</h5>
			        					<p className="text-lead m-2">Expert in Automobile Engineering</p>
			        				</div>
			        			</div>
			        		</div>
			        		<div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
			        			<div className="row">
			        				<div className="col-3">
			        					<i className="h3 fa fa-warehouse"></i>
			        				</div>
			        				<div className="col-9">
				        				<h5 className="text-center">Housing</h5>
				        				<p className="text-lead m-2">Deals with Estate Management and Surveying</p>
			        				</div>
			        			</div>
			        		</div>
			        		<div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
			        			<div className="row">
			        				<div className="col-3">
			        					<i className="h3 fa fa-certificate"></i>
			        				</div>
			        				<div className="col-9">
			        					<h5 className="text-center">Consultancy</h5>
				        				<p className="text-lead m-2">We give Expert Advice</p>
			        				</div>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        </div>
		        <hr/>
		        <div className="container text-center">
		        	<div className="row shadow-lg">
		        		<h3 className="col-12">About Us</h3>
		        		<div className="row p-3">
			        		<div className="col-lg-6 col-md-6 col-12 p-1 aboutimg"></div>
			        		<div className="col-lg-6 col-md-6 col-12 p-2">
					        	<p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
								</p>
								<button className="btn readmore text-white">Read More</button>
			        		</div>
		        		</div>
		        	</div>
		        </div>
		        <hr/>
		        <div className="container">
		        <h3 className="text-center">Our Gallery</h3>
			        <div id="demo" className="carousel slide" data-ride="carousel">
					  	<ul className="carousel-indicators">
					    	<li data-target="#demo" data-slide-to="0" className="active"></li>
					    	<li data-target="#demo" data-slide-to="1"></li>
					    	<li data-target="#demo" data-slide-to="2"></li>
					  	</ul>
					  	<div className="carousel-inner">
					    	<div className="carousel-item active">
					      		<img src={require('./assets/images/laptop.jpg')} alt="Computer/ICT" width="1100" height="500" />
					      		<div className="carousel-caption">
					        		<h3>Computer/ICT</h3>
					        		<p>Involved in Software, Website development and Security Operations</p>
					      		</div>   
					    	</div>
					    	<div className="carousel-item">
					      		<img src={require('./assets/images/lens.jpg')} alt="Consultancy" width="1100" height="500" />
					      		<div className="carousel-caption">
					        		<h3>Consultancy</h3>
					        		<p>We give Expert Advice</p>
					      		</div>   
					    	</div>
					    	<div className="carousel-item">
					      		<img src={require('./assets/images/aircraft.jpeg')} alt="Education" width="1100" height="500" />
					      		<div className="carousel-caption">
					        		<h3>Education</h3>
					        		<p>Engages in Academic Training, Programmes and Workshop</p>
					      		</div>   
					    	</div>
					    	<div className="carousel-item">
					      		<img src={require('./assets/images/network.jpg')} alt="Electrical" width="1100" height="500" />
					      		<div className="carousel-caption">
					        		<h3>Electrical</h3>
					        		<p>Prvides Services in Electrical and electronic Engineering</p>
					      		</div>   
					    	</div>
					    	<div className="carousel-item">
					      		<img src={require('./assets/images/house.jpg')} alt="Housing" width="1100" height="500" />
					      		<div className="carousel-caption">
					        		<h3>Housing</h3>
					        		<p>Deals with Estate Management and Surveying</p>
					      		</div>   
					    	</div>
					    	<div className="carousel-item">
					      		<img src={require('./assets/images/mechanical.jpg')} alt="Mechanical" width="1100" height="500" />
					      		<div className="carousel-caption">
					        		<h3>Mechanical</h3>
					        		<p>Expert in Automobile Engineering</p>
					      		</div>   
					    	</div>
						</div>
						<a className="carousel-control-prev" href="#demo" data-slide="prev">
					    	<span className="carousel-control-prev-icon"></span>
						</a>
						<a className="carousel-control-next" href="#demo" data-slide="next">
					    	<span className="carousel-control-next-icon"></span>
						</a>
					</div>
		        </div>
		        <hr/>
		        <div className="container blog">
		        	<h3 className="text-center">Blogs</h3>
		        	<div className="row">
		        		<div className="col-lg-6 col-md-6 col-12">
		        			<small>December 12, 2019</small>
		        			<h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
		        			<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
		        			<button className="btn btn-primary">Read More</button>
		        		</div>
		        		<div className="col-lg-6 col-md-6 col-12">
		        			<small>December 12, 2019</small>
		        			<h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
		        			<p> t amet, consectetur adipisicing elit, sed do eiusmod
								unt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
		        			<button className="btn btn-primary">Read More</button>
		        		</div>
		        		<div className="col-lg-6 col-md-6 col-12">
		        			<small>December 12, 2019</small>
		        			<h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
		        			<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								iqua. Ut enim ad minim veniam...</p>
		        			<button className="btn btn-primary">Read More</button>
		        		</div>
		        		<div className="col-lg-6 col-md-6 col-12">
		        			<small>December 12, 2019</small>
		        			<h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
		        			<p> Lorem ipsu sed do eiusmod tempor incididunt ut labore et dolo
		        				re magna alim veniam...</p>
		        			<button className="btn btn-primary">Read More</button>
		        		</div>
		        		<div className="col-lg-6 col-md-6 col-12">
		        			<small>December 12, 2019</small>
		        			<h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
		        			<p> Lorem ipsum dolor sit od
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
		        			<button className="btn btn-primary">Read More</button>
		        		</div>
		        		<div className="col-lg-6 col-md-6 col-12">
		        			<small>December 12, 2019</small>
		        			<h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
		        			<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut...</p>
		        			<button className="btn btn-primary">Read More</button>
		        		</div>
		        	</div>
		        </div>
		        <hr/>
		        <div className="w-100 contact">
		        	<div className="container p-2">
		        		<h3 className="text-center">Contact Us</h3>
		        		<div className="row">
		        			<div className="col-md-6 text-center">
		        				<h5>Head Office</h5>
		        				<p>No 20, SQI Headquaters, Sqi zone</p>
		        			</div>
		        			<div className="col-md-6 text-center">
		        				<h5>Branch Offices</h5>
		        				<p>No 20, SQI branch, Sqi zone</p>
		        			</div>
		        		</div>
		        	</div>
		        </div>
			</React.Fragment>

		);
	}
}

export default Display;