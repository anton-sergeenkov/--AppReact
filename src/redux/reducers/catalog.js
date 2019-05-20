import { ADD_CATALOG } from "../actionTypes";

const catalog = (state = [], action) => {
    switch (action.type) {
        case ADD_CATALOG: {
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
