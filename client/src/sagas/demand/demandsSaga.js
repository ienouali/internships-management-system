import {takeEvery,  call, put} from 'redux-saga/effects';
import {DEMANDS   } from "../../actionTypes";
import {fetchDemands} from "../../api/internshipAPI";
import {setDemands} from "../../actions/demand/demandsAction";

function* handleDemandsLoad() {
    try {
        const demands = yield call(fetchDemands);
        yield put(setDemands(demands));
    }  catch (err) {
        yield put(setDemands(err.toString()));

    }
}

export default function* watchDemandsLoad() {
    yield  takeEvery(DEMANDS.LOAD,handleDemandsLoad);
}

