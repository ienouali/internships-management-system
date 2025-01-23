import {DELETE_SUPERVISOR} from "../../actionTypes";

const loadDeleteSupervisor = (ID,success) => ({
    type: DELETE_SUPERVISOR.DELETE,
    payload:{ID,success}
});


const deleteSupervisorAction = (supervisor) => ({
    type: DELETE_SUPERVISOR.DELETE_SUCCESS,
    payload: supervisor
});


export {loadDeleteSupervisor, deleteSupervisorAction}