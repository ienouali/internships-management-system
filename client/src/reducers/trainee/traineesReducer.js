import {TRAINEES} from '../../actionTypes';

const loadTraineesReducer = (state = false, action) => {
    switch (action.type) {
        case TRAINEES.LOAD:
            return true;
        case TRAINEES.LOAD_SUCCESS:
            return false;
        case TRAINEES.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const traineesReducers = (state = [], action) => {
    if (action.type === TRAINEES.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};



export {loadTraineesReducer, traineesReducers};