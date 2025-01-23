import {ADD_SUPERVISOR} from "../../actionTypes";

const loadingAddSupervisor = (state = false, action) => {
    switch (action.type) {
        case ADD_SUPERVISOR.ADD:
            return true;
        case ADD_SUPERVISOR.ADD_SUCCESS:
            return false;
        case ADD_SUPERVISOR.ADD_FAIL:
            return false;
        default:
            return state;
    }
};



export {loadingAddSupervisor};
