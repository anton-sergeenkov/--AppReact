import React, {Component} from 'react';
import classes from './Menu.scss';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
	render() {
		return (
			<ul className={classes.wrapper}>
				<li><NavLink to="/" exact>Home</NavLink></li>
				<li><NavLink to="/catalog/">Catalog</NavLink></li>
			</ul>
		);
	}
}
