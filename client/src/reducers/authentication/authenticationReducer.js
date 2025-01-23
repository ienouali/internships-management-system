import {AUTHENTICATION} from "../../actionTypes";

const loadingAuthentication = (state = false, action) => {
    switch (action.type) {
        case AUTHENTICATION.AUTH:
            return true;
        case AUTHENTICATION.AUTH_SUCCESS:
            return false;
        case AUTHENTICATION.AUTH_FAIL:
            return false;
        default:
            return state;
    }
};

const authSuccessReducers = (state = null, action) => {
    if (action.type === AUTHENTICATION.AUTH_SUCCESS) {
        return action.payload;
    }
    return state;
};

const loggedReducer = (state = null, action) => {
    if (action.type === AUTHENTICATION.LOGGED) {
        return action.payload;
    }
    return state;
};


export {loadingAuthentication, authSuccessReducers , loggedReducer};
