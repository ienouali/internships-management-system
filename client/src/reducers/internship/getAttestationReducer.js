import {GET_ATTESTATION} from '../../actionTypes';

const loadAttestationReducer = (state = false, action) => {
    switch (action.type) {
        case GET_ATTESTATION.LOAD:
            return true;
        case GET_ATTESTATION.LOAD_SUCCESS:
            return false;
        case GET_ATTESTATION.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const AttestationReducers = (state = null, action) => {
    if (action.type === GET_ATTESTATION.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadAttestationReducer, AttestationReducers};