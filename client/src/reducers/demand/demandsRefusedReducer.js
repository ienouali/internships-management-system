import {DEMANDS_REFUSED} from '../../actionTypes';

const loadDemandsRefusedReducer = (state = false, action) => {
    switch (action.type) {
        case DEMANDS_REFUSED.LOAD:
            return true;
        case DEMANDS_REFUSED.LOAD_SUCCESS:
            return false;
        case DEMANDS_REFUSED.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const demandsRefusedReducers = (state = [], action) => {
    if (action.type === DEMANDS_REFUSED.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadDemandsRefusedReducer, demandsRefusedReducers};