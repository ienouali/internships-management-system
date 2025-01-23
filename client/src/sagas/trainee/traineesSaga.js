import {takeEvery,  call, put} from 'redux-saga/effects';
import { TRAINEES} from "../../actionTypes";
import {fetchTrainees} from "../../api/traineeAPI";
import {setTrainees} from "../../actions/trainee/traineesAction";


function* handleTrainees() {
    try {
        const trainees = yield call(fetchTrainees);
        yield put(setTrainees(trainees));
    }  catch (err) {
        yield put(setTrainees(err.toString()));
    }
}

export default function* watchTrainees() {
    yield  takeEvery(TRAINEES.LOAD,handleTrainees);
}

