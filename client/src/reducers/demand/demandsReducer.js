import {DEMANDS} from '../../actionTypes';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case DEMANDS.LOAD:
            return true;
        case DEMANDS.LOAD_SUCCESS:
            return false;
        case DEMANDS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const demandsReducers = (state = [], action) => {
    if (action.type === DEMANDS.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadingReducer, demandsReducers};