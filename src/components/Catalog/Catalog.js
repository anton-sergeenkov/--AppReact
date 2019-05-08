import React from 'react';
import axios from 'axios';
import catalogList from '../../assets/catalog.json';
import classes from './Catalog.scss';

export default class Catalog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//
		};
	}
	render() {

		const items = catalogList.map((item) =>
			<div className={classes.element} key={item.id}>
				<div className={classes.name}>{item.name}</div>
				<img className={classes.img} src={item.img} alt={item.name} />
				<div className={classes.price}>{item.price} USD</div>
			</div>
		);

		return (
			<div>
				<div className={classes.wrapper}>
					{items}
				</div>
			</div>
		);

	}
}
