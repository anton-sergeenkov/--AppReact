import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from "react-redux";
import { addCatalog } from "../../redux/actions";

import classes from './Catalog.scss';
import { REQUEST_SERVER } from '../../constants';

class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//
		};
	}
	componentDidMount() {
		axios.get(REQUEST_SERVER.URL)
		.then(response => {
			this.props.addCatalog(response.data);
		})
		.catch(error => console.log(error));
	}
	render() {
		const catalog = this.props.catalog;

		if (catalog.length !== 0) {

			var items = catalog.catalogList.map((item) =>
				<Link to={`/catalog/${item.id}`} key={item.id}>
					<div className={classes.element}>
						<div className={classes.name}>{item.name}</div>
						<img className={classes.img} src={item.img} alt={item.name} />
						<div className={classes.price}>{item.price} USD</div>
					</div>
				</Link>
			);

		} else {
			var items = '';
		}

		return (
			<div className={'wrapper' + ' ' + classes.wrapper}>
				{items}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	catalog: state.catalog
})
const mapDispatchToProps = {
	addCatalog
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Catalog);
