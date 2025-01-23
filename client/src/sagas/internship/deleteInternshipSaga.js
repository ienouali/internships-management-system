import {takeEvery,  call, put} from 'redux-saga/effects';
import {DELETE_DEMAND, MESSAGE} from "../../actionTypes";
import {deleteInternshipOrDemand} from "../../api/internshipAPI";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleDeleteInternship(action) {
    try {
        const message = yield call(deleteInternshipOrDemand,action.payload);

        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchDeleteInternship() {
    yield  takeEvery(DELETE_DEMAND.DELETE,handleDeleteInternship);
}

