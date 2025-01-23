import {DETAILS_INTERNSHIP} from "../../actionTypes";

const loadDetailsInternship = (ID) => ({
    type: DETAILS_INTERNSHIP.LOAD,
    payload:ID
});


const setDetailsInternship = internship => ({
    type: DETAILS_INTERNSHIP.LOAD_SUCCESS,
    payload: internship
});




export {loadDetailsInternship, setDetailsInternship}