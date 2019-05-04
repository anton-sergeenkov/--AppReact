import React from 'react';
import AppChild from '../AppChild/AppChild';
import logo from '../../assets/logo.svg';
import classes from './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className={classes.headerItem}>App</h1>
				<AppChild />
				<img className={classes.logo} src={logo} width="200px" />
			</div>
		);
	}
}
