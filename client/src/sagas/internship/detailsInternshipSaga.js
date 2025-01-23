import {takeEvery,  call, put} from 'redux-saga/effects';
import {DETAILS_INTERNSHIP, MESSAGE} from "../../actionTypes";
import {getDetailsInternship} from "../../api/internshipAPI";
import {setDetailsInternship} from "../../actions/internship/detailsInternshipAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleDetailsInternshipLoad(action) {

    try {
        const detailsInternship = yield call(getDetailsInternship,action.payload);
        yield put(setDetailsInternship(detailsInternship));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchDetailsInternshipLoad() {
    yield  takeEvery(DETAILS_INTERNSHIP.LOAD,handleDetailsInternshipLoad);
}

