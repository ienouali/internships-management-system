import {GET_CV} from '../../actionTypes';

const loadCVReducer = (state = false, action) => {
    switch (action.type) {
        case GET_CV.LOAD:
            return true;
        case GET_CV.LOAD_SUCCESS:
            return false;
        case GET_CV.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const CVReducers = (state = null, action) => {
    if (action.type === GET_CV.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadCVReducer, CVReducers};