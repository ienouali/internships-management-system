import {takeEvery,  call, put} from 'redux-saga/effects';
import { SUPERVISORS} from "../../actionTypes";
import {fetchSupervisors} from "../../api/supervisorsAPI";
import {setSupervisors} from "../../actions/supervisor/supervisorsAction";

function* handleSupervisors() {
    try {
        const supervisors = yield call(fetchSupervisors);
        yield put(setSupervisors(supervisors));
    }  catch (err) {
        yield put(setSupervisors(err.toString()));
    }
}

export default function* watchSupervisors() {
    yield  takeEvery(SUPERVISORS.LOAD,handleSupervisors);
}

