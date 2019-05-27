import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Product from '../Product/Product';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Route path="/catalog" exact component={Catalog} />
				<Route path="/catalog/:id" component={Product} />
			</Router>
		);
	}
}
