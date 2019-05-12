import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import classes from './Header.scss';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//
		};
	}
	render() {
		return (
			<div className={classes.wrapper}>
                <Menu />
			</div>
		);
	}
}
