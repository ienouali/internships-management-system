import {SUPERVISORS} from '../../actionTypes';

const loadSupervisorsReducer = (state = false, action) => {
    switch (action.type) {
        case SUPERVISORS.LOAD:
            return true;
        case SUPERVISORS.LOAD_SUCCESS:
            return false;
        case SUPERVISORS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const supervisorsReducers = (state = [], action) => {
    if (action.type === SUPERVISORS.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};

export {loadSupervisorsReducer, supervisorsReducers};