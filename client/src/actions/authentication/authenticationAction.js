import {AUTHENTICATION} from "../../actionTypes";

const auth = (user) => ({
    type: AUTHENTICATION.AUTH,
    payload : user,
});

const setUser = user => ({
    type: AUTHENTICATION.AUTH_SUCCESS,
    payload: user
});

const logged = token => ({
   type: AUTHENTICATION.LOGGED,
    payload:token
});

export {auth, setUser,logged};