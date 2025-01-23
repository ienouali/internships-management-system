import {ADD_DEMAND} from "../../actionTypes";

const loadingAddReducer = (state = false, action) => {
    switch (action.type) {
        case ADD_DEMAND.ADD:
            return true;
        case ADD_DEMAND.ADD_SUCCESS:
            return false;
        case ADD_DEMAND.ADD_FAIL:
            return false;
        default:
            return state;
    }
};

export {loadingAddReducer};
