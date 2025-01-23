import {takeEvery, call, put} from 'redux-saga/effects';
import {CLOSE_INTERNSHIP,MESSAGE} from "../../actionTypes";
import {closeInternship} from '../../api/internshipAPI';
import {setMessage} from "../../actions/msg/messsageAction";


function* handleCloseInternship(action) {
    try {
        const message = yield call(closeInternship,action.payload);
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchCloseInternship() {
    yield takeEvery(CLOSE_INTERNSHIP.CLOSE, handleCloseInternship);
}
