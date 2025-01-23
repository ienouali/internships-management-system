import {takeEvery, call, put} from 'redux-saga/effects';
import {ADD_SUPERVISOR,MESSAGE} from "../../actionTypes";
import {addSupervisor} from '../../api/supervisorsAPI';
import {setMessage} from "../../actions/msg/messsageAction"

function* handleAddSupervisor(action) {
    try {
        const message = yield call(addSupervisor,action.payload.supervisor);
        if(action.payload.onsuccess) {
            action.payload.onsuccess();
        }
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchAddSupervisor() {
    yield takeEvery(ADD_SUPERVISOR.ADD, handleAddSupervisor);
}
