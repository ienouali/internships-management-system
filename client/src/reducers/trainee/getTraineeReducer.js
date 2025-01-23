import {GET_TRAINEE} from '../../actionTypes';

const loadTraineeReducer = (state = false, action) => {
    switch (action.type) {
        case GET_TRAINEE.LOAD:
            return true;
        case GET_TRAINEE.LOAD_SUCCESS:
            return false;
        case GET_TRAINEE.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const traineeReducers = (state = null, action) => {
    if (action.type === GET_TRAINEE.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadTraineeReducer, traineeReducers};