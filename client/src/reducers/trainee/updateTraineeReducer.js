import {UPDATE_TRAINEE} from "../../actionTypes";

const loadUpdateTraineeReducer = (state = false, action) => {
    switch (action.type) {
        case UPDATE_TRAINEE.UPDATE:
            return true;
        case UPDATE_TRAINEE.UPDATE_SUCCESS:
            return false;
        case UPDATE_TRAINEE.UPDATE_FAIL:
            return false;
        default:
            return state;
    }
};



export {loadUpdateTraineeReducer};
