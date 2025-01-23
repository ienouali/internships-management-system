import {REFUSED_DEMAND} from "../../actionTypes";

const loadRefuseReducer = (state = false, action) => {
    switch (action.type) {
        case REFUSED_DEMAND.REFUSED:
            return true;
        case REFUSED_DEMAND.REFUSED_SUCCESS:
            return false;
        case REFUSED_DEMAND.REFUSED_FAIL:
            return false;
        default:
            return state;
    }
};



export {loadRefuseReducer};
