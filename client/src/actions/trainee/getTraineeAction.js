import {GET_TRAINEE} from "../../actionTypes";

const loadTrainee = (ID) => ({
    type: GET_TRAINEE.LOAD,
    payload:ID
});


const setTrainee = demand => ({
    type: GET_TRAINEE.LOAD_SUCCESS,
    payload: demand
});

export {loadTrainee, setTrainee }