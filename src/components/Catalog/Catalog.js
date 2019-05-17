import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Catalog.scss';
import { REQUEST_SERVER } from '../../constants.js';

export default class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: []
		};
	}
	componentDidMount() {
		axios.get(REQUEST_SERVER.URL)
		.then(response => {
			this.setState({
				catalog: response.data
			});
		})
		.catch(error => console.log(error));
	}
	render() {
		const catalog = this.state.catalog;

		const items = catalog.map((item) =>
			<Link to={`/catalog/${item.id}`} key={item.id}>
				<div className={classes.element}>
					<div className={classes.name}>{item.name}</div>
					<img className={classes.img} src={item.img} alt={item.name} />
					<div className={classes.price}>{item.price} USD</div>
				</div>
			</Link>
		);

		return (
			<div className={'wrapper' + ' ' + classes.wrapper}>
				{items}
			</div>
		);
	}
}
