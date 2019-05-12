import React, {Component} from 'react';
import classes from './Menu.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//
		};
	}
	render() {
		return (
			<div className={classes.wrapper}>
				<Link to="/">Home</Link>
				<Link to="/catalog/">Catalog</Link>
			</div>
		);
	}
}
