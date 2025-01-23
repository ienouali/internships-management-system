import {takeEvery,  call, put} from 'redux-saga/effects';
import {COMPLETED_INTERNSHIPS} from "../../actionTypes";
import {fetchInternshipsCompleted} from "../../api/internshipAPI";
import {setInternshipsCompleted} from "../../actions/internship/internshipsCompletedAction";


function* handleCompletedLoad() {
    try {
        const internshipCompletedList = yield call(fetchInternshipsCompleted);
        yield put(setInternshipsCompleted(internshipCompletedList));
    }  catch (err) {
        yield put(setInternshipsCompleted(err.toString()));

    }
}

export default function* watchInternshipCompleted() {
    yield  takeEvery(COMPLETED_INTERNSHIPS.LOAD,handleCompletedLoad);
}
