import {DEMAND} from "../../actionTypes";

const loadDemand = (ID) => ({
    type: DEMAND.LOAD,
    payload:ID
});


const setDemand = demand => ({
    type: DEMAND.LOAD_SUCCESS,
    payload: demand
});



export {loadDemand, setDemand}