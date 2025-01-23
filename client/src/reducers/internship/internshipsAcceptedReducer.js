import {INTERNSHIPS_ACCEPTED} from '../../actionTypes';

const loadInternshipAcceptedReducer = (state = false, action) => {
    switch (action.type) {
        case INTERNSHIPS_ACCEPTED.LOAD:
            return true;
        case INTERNSHIPS_ACCEPTED.LOAD_SUCCESS:
            return false;
        case INTERNSHIPS_ACCEPTED.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const internshipsAcceptedReducers = (state = [], action) => {
    if (action.type === INTERNSHIPS_ACCEPTED.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadInternshipAcceptedReducer, internshipsAcceptedReducers};