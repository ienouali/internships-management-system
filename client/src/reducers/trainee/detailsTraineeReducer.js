import {DETAILS_TRAINEE} from '../../actionTypes';

const loadDetailsTraineeReducer = (state = false, action) => {
    switch (action.type) {
        case DETAILS_TRAINEE.LOAD:
            return true;
        case DETAILS_TRAINEE.LOAD_SUCCESS:
            return false;
        case DETAILS_TRAINEE.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const detailsTraineeReducers = (state = null, action) => {
    if (action.type === DETAILS_TRAINEE.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadDetailsTraineeReducer, detailsTraineeReducers};