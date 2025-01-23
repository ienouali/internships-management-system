import {takeEvery,  call, put} from 'redux-saga/effects';
import {CLOSED_INTERNSHIPS} from "../../actionTypes";
import {fetchInternshipsClosed} from "../../api/internshipAPI";
import {setInternshipsClosed} from "../../actions/internship/internshipsClosedAction";

function* handleClosedLoad() {
    try {
        const internshipClosedList = yield call(fetchInternshipsClosed);
        yield put(setInternshipsClosed(internshipClosedList));
    }  catch (err) {
        yield put(setInternshipsClosed(err.toString()));
    }
}

export default function* watchInternshipClosed() {
    yield  takeEvery(CLOSED_INTERNSHIPS.LOAD,handleClosedLoad);
}
