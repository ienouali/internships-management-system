import {DELETE_DEMAND} from '../../actionTypes';

const loadDeleteInternshipReducer = (state = false, action) => {
    switch (action.type) {
        case DELETE_DEMAND.DELETE:
            return true;
        case DELETE_DEMAND.DELETE_SUCCESS:
            return false;
        case DELETE_DEMAND.DELETE_FAIL:
            return false;
        default:
            return state;
    }
};

const deleteInternshipReducers = (state = null, action) => {
    if (action.type === DELETE_DEMAND.DELETE_SUCCESS) {
        return action.payload;
    }
    return state;
};



export {loadDeleteInternshipReducer, deleteInternshipReducers};