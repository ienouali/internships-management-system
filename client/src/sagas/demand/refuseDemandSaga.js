import {takeEvery, call, put} from 'redux-saga/effects';
import {REFUSED_DEMAND,MESSAGE} from "../../actionTypes";
import {refuseDemand} from '../../api/internshipAPI';
import {setMessage} from "../../actions/msg/messsageAction"


function* handleRefuseDemand(action) {
    try {
        const message = yield call(refuseDemand,action.payload.demand);
        if(action.payload.onsuccess) {
            action.payload.onsuccess();
        }
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchRefuseDemand() {
    yield takeEvery(REFUSED_DEMAND.REFUSED, handleRefuseDemand);
}
