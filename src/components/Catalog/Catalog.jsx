import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCatalog } from '../../redux/actions';
import CatalogSearch from '../CatalogSearch/CatalogSearch';
import classes from './Catalog.scss';

class Catalog extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getCatalog();
	}
	render() {
		const catalog = this.props.catalog;

		var items = '';
		if (catalog.length !== 0) {
			items = catalog.catalogList.map((item) =>
				<Link to={`/catalog/${item.id}`} key={item.id}>
					<div className={classes.element}>
						<div className={classes.name}>{item.name}</div>
						<img className={classes.img} src={item.img} alt={item.name} />
						<div className={classes.price}>{item.price} USD</div>
					</div>
				</Link>
			);
		}

		return (
			<div className={'wrapper' + ' ' + classes.wrapper}>
				<CatalogSearch catalog={this.props.catalog}/>
				{items}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	catalog: state.catalog
})
const mapDispatchToProps = {
	getCatalog
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Catalog);
