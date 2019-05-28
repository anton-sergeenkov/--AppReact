import { GET_CATALOG, SET_CATALOG_SEARCH } from '../actionTypes';

const initialState = {
    catalogList: [],
    searchValue: ''
};

const catalog = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG: {
            return {
                ...state, 
                catalogList: action.payload
            };
        }
        case SET_CATALOG_SEARCH: {
            return {
                ...state, 
                searchValue: action.payload
            };  
        }
        default: {
            return state;
        }
    }
};

export default catalog;
