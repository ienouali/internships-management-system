import {CLOSED_INTERNSHIPS} from "../../actionTypes";

const loadInternshipsClosed = () => ({
    type: CLOSED_INTERNSHIPS.LOAD
});

const setInternshipsClosed = internship => ({
    type: CLOSED_INTERNSHIPS.LOAD_SUCCESS,
    payload: internship
});



export {loadInternshipsClosed, setInternshipsClosed}