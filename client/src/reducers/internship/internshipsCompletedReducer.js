import {COMPLETED_INTERNSHIPS} from '../../actionTypes';

const loadInternshipCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case COMPLETED_INTERNSHIPS.LOAD:
            return true;
        case COMPLETED_INTERNSHIPS.LOAD_SUCCESS:
            return false;
        case COMPLETED_INTERNSHIPS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const internshipsCompletedReducers = (state = [], action) => {
    if (action.type === COMPLETED_INTERNSHIPS.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};

export {loadInternshipCompletedReducer, internshipsCompletedReducers};