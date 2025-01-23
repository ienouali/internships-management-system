import {GET_CV} from "../../actionTypes";

const loadCV = (ID) => ({
    type: GET_CV.LOAD,
    payload:ID
});


const setCV = cv => ({
    type: GET_CV.LOAD_SUCCESS,
    payload: cv
});


export {loadCV, setCV}