import {UPDATE_SUPERVISOR} from "../../actionTypes";

const loadUpdateSupervisor = (state = false, action) => {
    switch (action.type) {
        case UPDATE_SUPERVISOR.UPDATE:
            return true;
        case UPDATE_SUPERVISOR.UPDATE_SUCCESS:
            return false;
        case UPDATE_SUPERVISOR.UPDATE_FAIL:
            return false;
        default:
            return state;
    }
};

export {loadUpdateSupervisor};
