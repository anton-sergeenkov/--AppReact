import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Route path="/catalog" component={Catalog} />
			</Router>
		);
	}
}
