import {DELETE_SUPERVISOR} from '../../actionTypes';

const loadDeleteSupervisorReducer = (state = false, action) => {
    switch (action.type) {
        case DELETE_SUPERVISOR.DELETE:
            return true;
        case DELETE_SUPERVISOR.DELETE_SUCCESS:
            return false;
        case DELETE_SUPERVISOR.DELETE_FAIL:
            return false;
        default:
            return state;
    }
};

const deleteSupervisorReducers = (state = null, action) => {
    if (action.type === DELETE_SUPERVISOR.DELETE_SUCCESS) {
        return action.payload;
    }
    return state;
};



export {loadDeleteSupervisorReducer, deleteSupervisorReducers};