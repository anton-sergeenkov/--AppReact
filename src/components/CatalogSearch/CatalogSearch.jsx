import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCatalogSearch } from '../../redux/actions';
import classes from './CatalogSearch.scss';

class CatalogSearch extends Component {
    constructor(props) {
        super(props);
    }
	handleChange = (event) => {
        this.props.setCatalogSearch(event.target.value);
    }
	render() {
		return (
			<div className={classes.wrapper}>
                <input
                    type="text" 
                    onChange={this.handleChange} 
                    className={classes.search} 
                    placeholder="Enter the name of the guitar..." 
                />
            </div>
		);
	}
}

const mapDispatchToProps = {
	setCatalogSearch
}
export default connect(
	null,
	mapDispatchToProps
)(CatalogSearch);

