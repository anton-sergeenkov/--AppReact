import axios from 'axios';
import { REQUEST_SERVER } from '../constants';
import { GET_CATALOG } from "./actionTypes";

export const getCatalog = function() {
    return function(dispatch) {

        axios.get(REQUEST_SERVER.URL)
		.then(response => {
            dispatch({
                type: GET_CATALOG,
                payload: response.data,
            })
		})
        .catch(error => console.log(error));
        
    }
}
