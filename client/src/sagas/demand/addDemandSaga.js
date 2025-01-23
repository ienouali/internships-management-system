import {takeEvery,  call, put} from 'redux-saga/effects';
import {ADD_DEMAND,MESSAGE} from "../../actionTypes";
import {addDemand} from '../../api/internshipAPI';
import {setMessage} from "../../actions/msg/messsageAction"

function* handleAddDemand(action) {
    try {
        const message = yield call(addDemand,action.payload.demand);
        if(action.payload.onsuccess) {
            action.payload.onsuccess();
        }
        yield put(setMessage(message,MESSAGE.MESSAGE_SUCCESS));
    } catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchAddDemand() {
    yield takeEvery(ADD_DEMAND.ADD, handleAddDemand);
}
