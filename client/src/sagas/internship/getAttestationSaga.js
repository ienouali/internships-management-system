import {takeEvery,  call, put} from 'redux-saga/effects';
import {GET_ATTESTATION , MESSAGE} from "../../actionTypes";
import {createAttestation} from "../../api/internshipAPI";
import {setAttestation} from "../../actions/internship/getAttestationAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleLoadAttestation(action) {
    try {
        const attestation = yield call(createAttestation,action.payload);
        yield put(setAttestation(attestation));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchLoadAttestation() {
    yield  takeEvery(GET_ATTESTATION.LOAD,handleLoadAttestation);
}

