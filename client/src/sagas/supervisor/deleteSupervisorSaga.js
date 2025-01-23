import {takeEvery,  call, put} from 'redux-saga/effects';
import {DELETE_SUPERVISOR, MESSAGE} from "../../actionTypes";
import {deleteSupervisor} from "../../api/supervisorsAPI";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleDeleteSupervisor(action) {
    try {
        const message = yield call(deleteSupervisor,action.payload);
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchDeleteSupervisor() {
    yield  takeEvery(DELETE_SUPERVISOR.DELETE,handleDeleteSupervisor);
}

