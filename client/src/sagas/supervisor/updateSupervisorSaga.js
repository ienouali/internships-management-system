import {takeEvery, call, put} from 'redux-saga/effects';
import {UPDATE_SUPERVISOR,MESSAGE} from "../../actionTypes";
import {updateSupervisor} from '../../api/supervisorsAPI';
import {setMessage} from "../../actions/msg/messsageAction";


function* handleUpdateSupervisor(action) {
    try {
        const message = yield call(updateSupervisor,action.payload.supervisor);
        if(action.payload.onsuccess) {
            action.payload.onsuccess();
        }
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchUpdateSupervisor() {
    yield takeEvery(UPDATE_SUPERVISOR.UPDATE, handleUpdateSupervisor);
}
