import {ADD_SUPERVISOR} from "../../actionTypes";

const addSupervisor = (supervisor,onsuccess) => ({
    type: ADD_SUPERVISOR.ADD,
    payload : {supervisor,onsuccess}
});

export {addSupervisor};