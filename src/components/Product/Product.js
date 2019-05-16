import React, {Component} from 'react';
import axios from 'axios';
import classes from './Product.scss';

export default class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {}
		};
	}
	componentDidMount() {
		axios.get('http://anton-sergeenkov.ru/app/json/index.php?id='+this.props.match.params.id)
		.then(response => {
			this.setState({
				product: response.data
			});
		})
		.catch(error => console.log(error));
	}
	render() {
		const product = this.state.product;

		return(
			<div className={classes.wrapper}>
				<div className={classes.name}>{product.name}</div>
				<img className={classes.img} src={product.img} alt={product.name} />
				<div className={classes.price}>{product.price} USD</div>
				<div className={classes.description}>{product.description}</div>
			</div>
		);
	}
}
