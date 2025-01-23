import {INTERNSHIPS_ACCEPTED} from "../../actionTypes";

const loadInternshipsAccepted = () => ({
    type: INTERNSHIPS_ACCEPTED.LOAD
});

const setInternshipsAccepted = internship => ({
    type: INTERNSHIPS_ACCEPTED.LOAD_SUCCESS,
    payload: internship
});



export {loadInternshipsAccepted, setInternshipsAccepted}