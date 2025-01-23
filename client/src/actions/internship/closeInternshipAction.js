import {CLOSE_INTERNSHIP} from "../../actionTypes";

const closeInternship = (internship) => ({
    type: CLOSE_INTERNSHIP.CLOSE,
    payload :internship,
});


export { closeInternship };