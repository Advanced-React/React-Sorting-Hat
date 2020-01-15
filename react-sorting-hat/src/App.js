import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import data from './data'

class App extends Component {
	constructor () {
		super();
		(this.state = {
			quiz : [],
		}),
			{
				house : [],
			};
	}

	componentDidMount () {}

	componentWillUnmount () {}

	componentDidUpdate () {}

	render () {
		return (
			<div className='App'>
				<Welcome />
			</div>
		);
	}
}

export default App;
