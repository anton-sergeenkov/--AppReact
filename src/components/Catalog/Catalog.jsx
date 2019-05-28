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
	filterName() {
		//
	}
	render() {
		const catalogList = this.props.catalog.catalogList;
		const searchValue = this.props.catalog.searchValue;

		// const filteredCatalog = filterName(catalogList, searchValue);

		var items = '';
		if (catalogList.length !== 0) {
			items = catalogList.map((item) =>
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
				<CatalogSearch />
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
