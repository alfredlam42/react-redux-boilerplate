import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFoo } from '../js/actions/fooActions';

import './App.css';

@connect((store) => {
	return {
		foo: store.foo,
	}
})
export default class App extends Component {
	componentDidMount(){
		this.props.dispatch(getFoo());
	}

	render(){
		console.log('this.props: ', this.props);
		return	(
			<div>
				<h1>Hello World!</h1>
			</div>
		)
	}
}