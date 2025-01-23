import {takeEvery,  call, put} from 'redux-saga/effects';
import {GET_SUPERVISOR, MESSAGE} from "../../actionTypes";
import { getSupervisor} from "../../api/supervisorsAPI";
import { setSupervisor} from "../../actions/supervisor/getSupervisorAction";
import {setMessage} from "../../actions/msg/messsageAction";


function* handleSupervisorLoad(action) {
    try {
        const supervisor = yield call(getSupervisor,action.payload);
        yield put(setSupervisor(supervisor));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchSupervisorLoad() {
    yield  takeEvery(GET_SUPERVISOR.LOAD,handleSupervisorLoad);
}

