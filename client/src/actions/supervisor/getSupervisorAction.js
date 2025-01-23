import {GET_SUPERVISOR} from "../../actionTypes";

const loadSupervisor = (ID) => ({
    type: GET_SUPERVISOR.LOAD,
    payload:ID
});

const setSupervisor = demand => ({
    type: GET_SUPERVISOR.LOAD_SUCCESS,
    payload: demand
});


export {loadSupervisor, setSupervisor}