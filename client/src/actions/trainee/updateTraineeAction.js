import {UPDATE_TRAINEE} from "../../actionTypes";

const updateTrainee = (trainee,onsuccess) => ({
    type: UPDATE_TRAINEE.UPDATE,
    payload : {trainee,onsuccess}
});

export { updateTrainee };