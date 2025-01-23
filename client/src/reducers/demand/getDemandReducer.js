import {DEMAND} from '../../actionTypes';

const loadDemandReducer = (state = false, action) => {
    switch (action.type) {
        case DEMAND.LOAD:
            return true;
        case DEMAND.LOAD_SUCCESS:
            return false;
        case DEMAND.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const demandReducers = (state = null, action) => {
    if (action.type === DEMAND.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadDemandReducer, demandReducers};