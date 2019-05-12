import React, {Component} from 'react';
import axios from 'axios';
import classes from './Catalog.scss';

export default class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: []
		};
	}
	componentDidMount() {
		axios.get('https://api.myjson.com/bins/9yy7i')
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
			<div className={classes.element} key={item.id}>
				<div className={classes.name}>{item.name}</div>
				<img className={classes.img} src={item.img} alt={item.name} />
				<div className={classes.price}>{item.price} USD</div>
			</div>
		);

		return (
			<div className={classes.wrapper}>
				{items}
			</div>
		);
	}
}
