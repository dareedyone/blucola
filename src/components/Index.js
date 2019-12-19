import React, { Component } from 'react';
import IndexNav from './IndexNav';
import Display from './Display';
import Footer from './Footer';

class Index extends Component {

	// componentDidMount() {
	// 	$(window).load(function(){
	// 		alert('');
	// 		// $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
	// 	});
	// }

	render() {
		return (
			<React.Fragment>
				<IndexNav />
				<Display />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Index;