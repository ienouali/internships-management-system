import {SEARCH} from '../../actionTypes';

const loadSearchingReducer = (state = false, action) => {
    switch (action.type) {
        case SEARCH.SEARCH_LOAD:
            return true;
        case SEARCH.SEARCH_SUCCESS:
            return false;
        case SEARCH.SEARCH_FAIL:
            return false;
        default:
            return state;
    }
};

const dataSearchedReducer = (state = null, action) => {
    if (action.type === SEARCH.SEARCH_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadSearchingReducer, dataSearchedReducer};