import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Catalog from '../Catalog/Catalog';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu />
					<Route path="/catalog" component={Catalog} />
				</div>
			</Router>
		);
	}
}

// <Catalog />
