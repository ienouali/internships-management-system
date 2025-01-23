import {takeEvery, call, put} from 'redux-saga/effects';
import {UPDATE_TRAINEE,MESSAGE} from "../../actionTypes";
import {updateTrainee} from '../../api/traineeAPI';
import {setMessage} from "../../actions/msg/messsageAction"


function* handleUpdateTrainee(action) {
    try {
        const message = yield call(updateTrainee,action.payload.trainee);
        if(action.payload.onsuccess) {
            action.payload.onsuccess();
        }
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchUpdateTrainee() {
    yield takeEvery(UPDATE_TRAINEE.UPDATE, handleUpdateTrainee);
}

