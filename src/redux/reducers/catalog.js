import { GET_CATALOG } from "../actionTypes";

const initialState = [];

const catalog = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG: {
            return {
                ...state, 
                catalogList: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default catalog;
