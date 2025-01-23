import {takeEvery,  call, put} from 'redux-saga/effects';
import {INTERNSHIPS_ACCEPTED} from "../../actionTypes";
import {fetchInternshipsAccepted} from "../../api/internshipAPI";
import {setInternshipsAccepted} from "../../actions/internship/internshipsAcceptedAction";


function* handleAcceptedLoad() {
    try {
        const internshipAcceptedList = yield call(fetchInternshipsAccepted);
        yield put(setInternshipsAccepted(internshipAcceptedList));
    }  catch (err) {
        yield put(setInternshipsAccepted(err.toString()));
    }
}

export default function* watchDemandsLoad() {
    yield  takeEvery(INTERNSHIPS_ACCEPTED.LOAD,handleAcceptedLoad);
}
 