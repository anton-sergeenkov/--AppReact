import React from 'react';
import classes from './AppChild.css';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className={classes.headerItem}>AppChild</h1>
			</div>
		);
	}
}
