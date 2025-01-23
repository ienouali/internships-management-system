import {TRAINEES} from "../../actionTypes";

const loadTrainees = () => ({
    type: TRAINEES.LOAD
});

const setTrainees = supervisors => ({
    type: TRAINEES.LOAD_SUCCESS,
    payload :supervisors
});


export {loadTrainees, setTrainees}