import { ADD_CATALOG } from "./actionTypes";

export const addCatalog = catalogList => ({
    type: ADD_CATALOG,
    payload: catalogList
})
