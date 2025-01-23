import {COMPLETED_INTERNSHIPS} from "../../actionTypes";

const loadInternshipsCompleted = () => ({
    type: COMPLETED_INTERNSHIPS.LOAD
});

const setInternshipsCompleted = internship => ({
    type: COMPLETED_INTERNSHIPS.LOAD_SUCCESS,
    payload: internship
});

export {loadInternshipsCompleted, setInternshipsCompleted}