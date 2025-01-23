import {takeEvery, call, put} from 'redux-saga/effects';
import {ACCEPT_DEMAND,MESSAGE} from "../../actionTypes";
import {acceptDemand} from '../../api/internshipAPI';
import {setMessage} from "../../actions/msg/messsageAction";


function* handleAcceptDemand(action) {
    try {
        const message = yield call(acceptDemand,action.payload.demand);
        if(action.payload.onsuccess) {
            action.payload.onsuccess();
        }
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchAcceptDemand() {
    yield takeEvery(ACCEPT_DEMAND.ACCEPT, handleAcceptDemand);
}
