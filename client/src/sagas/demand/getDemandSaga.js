import {takeEvery,  call, put} from 'redux-saga/effects';
import {DEMAND, MESSAGE} from "../../actionTypes";
import {getDemand} from "../../api/internshipAPI";
import {setDemand} from "../../actions/demand/getDemandAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleDemandLoad(action) {
    try {
        const demand = yield call(getDemand,action.payload);
        yield put(setDemand(demand));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchDemandLoad() {
    yield  takeEvery(DEMAND.LOAD,handleDemandLoad);
}

