import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import classes from './Header.scss';

export default class Header extends Component {
	render() {
		return (
			<div className={'wrapper' + ' ' + classes.wrapper}>
                <Menu />
			</div>
		);
	}
}
