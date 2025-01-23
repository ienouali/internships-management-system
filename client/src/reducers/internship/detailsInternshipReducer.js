import {DETAILS_INTERNSHIP} from '../../actionTypes';

const loadDetailsInternshipReducer = (state = false, action) => {
    switch (action.type) {
        case DETAILS_INTERNSHIP.LOAD:
            return true;
        case DETAILS_INTERNSHIP.LOAD_SUCCESS:
            return false;
        case DETAILS_INTERNSHIP.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const detailsInternshipReducers = (state = null, action) => {
    if (action.type === DETAILS_INTERNSHIP.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};



export {loadDetailsInternshipReducer, detailsInternshipReducers};