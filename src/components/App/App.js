import React from 'react';
import ComponentTest from '../../containers/ComponentTest';
import logo from '../../assets/logo.svg';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Привет</h1>
				<div class="img"></div>
				<ComponentTest />
				<img src={logo} width="200px" />
			</div>
		);
	}
}
