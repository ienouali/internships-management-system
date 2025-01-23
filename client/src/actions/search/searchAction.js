import {SEARCH} from "../../actionTypes";

const loadSearch = (value) => ({
    type: SEARCH.SEARCH_LOAD,
    payload:value
});


const setData = data => ({
    type: SEARCH.SEARCH_SUCCESS,
    payload: data
});


export {loadSearch, setData}