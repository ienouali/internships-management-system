import {CLOSED_INTERNSHIPS} from '../../actionTypes';

const loadInternshipClosedReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSED_INTERNSHIPS.LOAD:
            return true;
        case CLOSED_INTERNSHIPS.LOAD_SUCCESS:
            return false;
        case CLOSED_INTERNSHIPS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const internshipsClosedReducers = (state = [], action) => {
    if (action.type === CLOSED_INTERNSHIPS.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadInternshipClosedReducer, internshipsClosedReducers};