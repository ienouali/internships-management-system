import {CLOSE_INTERNSHIP} from "../../actionTypes";

const loadingCloseReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSE_INTERNSHIP.CLOSE:
            return true;
        case CLOSE_INTERNSHIP.CLOSE_SUCCESS:
            return false;
        case CLOSE_INTERNSHIP.CLOSE_FAIL:
            return false;
        default:
            return state;
    }
};

const closeSuccessReducer = (state = null, action) => {
    if (action.type === CLOSE_INTERNSHIP.CLOSE_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadingCloseReducer, closeSuccessReducer};
