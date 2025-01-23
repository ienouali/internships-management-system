import {DETAILS_TRAINEE} from "../../actionTypes";

const loadDetailsTrainee= (ID) => ({
    type: DETAILS_TRAINEE.LOAD,
    payload:ID
});


const setDetailsTrainee = trainee => ({
    type: DETAILS_TRAINEE.LOAD_SUCCESS,
    payload: trainee
});


export {loadDetailsTrainee, setDetailsTrainee}