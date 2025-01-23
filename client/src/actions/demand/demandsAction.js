import {DEMANDS} from "../../actionTypes";

const loadDemands = () => ({
    type: DEMANDS.LOAD
});

const setDemands = demands => ({
    type: DEMANDS.LOAD_SUCCESS,
    payload: demands
});

export {loadDemands, setDemands}