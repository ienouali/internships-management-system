import {DELETE_DEMAND} from "../../actionTypes";

const loadDeleteInternship = (ID) => ({
    type: DELETE_DEMAND.DELETE,
    payload:ID
});


const deleteInternship = internship => ({
    type: DELETE_DEMAND.DELETE_SUCCESS,
    payload: internship
});



export {loadDeleteInternship, deleteInternship}