import {GET_SUPERVISOR} from '../../actionTypes';

const loadSupervisorReducer = (state = false, action) => {
    switch (action.type) {
        case GET_SUPERVISOR.LOAD:
            return true;
        case GET_SUPERVISOR.LOAD_SUCCESS:
            return false;
        case GET_SUPERVISOR.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const supervisorReducers = (state = null, action) => {
    if (action.type === GET_SUPERVISOR.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadSupervisorReducer, supervisorReducers};