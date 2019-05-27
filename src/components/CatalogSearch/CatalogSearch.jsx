import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './CatalogSearch.scss';

class CatalogSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
			// catalog: ''
		};
    }
    // this.props.catalog.catalogList
    // this.props.catalogStore.catalogList
	handleChange = (event) => {
		console.log(event.target.value);
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

const mapStateToProps = state => ({
	catalogStore: state.catalog
})
export default connect(
	mapStateToProps,
	null
)(CatalogSearch);

