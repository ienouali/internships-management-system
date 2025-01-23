import {takeEvery,  call, put} from 'redux-saga/effects';
import {DEMANDS_REFUSED} from "../../actionTypes";
import {fetchRefusedDemands} from "../../api/internshipAPI";
import {setDemandsRefused} from "../../actions/demand/demandsrefusedAction";

function* handleDemandsRefusedLoad() {
    try {
        const demandsRefused = yield call(fetchRefusedDemands);
        yield put(setDemandsRefused(demandsRefused));
    }  catch (err) {
        yield put(setDemandsRefused(err.toString()));
    }
}

export default function* watchDemandsRefusedLoad() {
    yield  takeEvery(DEMANDS_REFUSED.LOAD,handleDemandsRefusedLoad);
}

