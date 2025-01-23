import {UPDATE_SUPERVISOR} from "../../actionTypes";

const updateSupervisor = (supervisor,onsuccess) => ({
    type: UPDATE_SUPERVISOR.UPDATE,
    payload : {supervisor,onsuccess}
});



export {updateSupervisor};