import React, { Component } from 'react';

class Welcome extends Component {
	constructor (props) {
		super(props);
		this.state = {

        };
	}
	render () {
		return (
			<div>
                <h1>Welcome to Hogwarts!</h1>
				<button>Find your House!</button>
			</div>
		);
	}
}
export default Welcome;
