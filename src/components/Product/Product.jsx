import React, {Component} from 'react';
import axios from 'axios';
import classes from './Product.scss';
import { REQUEST_SERVER } from '../../constants';

export default class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {}
		};
	}
	componentDidMount() {
		axios.get(REQUEST_SERVER.URL+'?id='+this.props.match.params.id)
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
			<div className={'wrapper' + ' ' + classes.wrapper}>
				<img className={classes.img} src={product.img} alt={product.name} />
				<div className={classes.name}>{product.name}</div>
				<div className={classes.price}>{product.price} USD</div>
				<div className={classes.description}>{product.description}</div>
			</div>
		);
	}
}
