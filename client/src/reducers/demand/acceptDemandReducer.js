import {ACCEPT_DEMAND} from "../../actionTypes";

const loadingAcceptReducer = (state = false, action) => {
    switch (action.type) {
        case ACCEPT_DEMAND.ACCEPT:
            return true;
        case ACCEPT_DEMAND.ACCEPT_SUCCESS:
            return false;
        case ACCEPT_DEMAND.ACCEPT_FAIL:
            return false;
        default:
            return state;
    }
};



export {loadingAcceptReducer};
