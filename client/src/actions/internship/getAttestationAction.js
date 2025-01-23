import {GET_ATTESTATION} from "../../actionTypes";

const loadAttestation = (ID) => ({
    type: GET_ATTESTATION.LOAD,
    payload:ID
});


const setAttestation = cv => ({
    type: GET_ATTESTATION.LOAD_SUCCESS,
    payload: cv
});

export {loadAttestation, setAttestation}