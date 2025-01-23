import {DEMANDS_REFUSED} from "../../actionTypes";

const loadDemandsRefused = () => ({
    type: DEMANDS_REFUSED.LOAD
});

const setDemandsRefused = demands => ({
    type: DEMANDS_REFUSED.LOAD_SUCCESS,
    payload: demands
});



export {loadDemandsRefused, setDemandsRefused}