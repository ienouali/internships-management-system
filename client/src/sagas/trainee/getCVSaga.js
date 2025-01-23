import {takeEvery,  call, put} from 'redux-saga/effects';
import {GET_CV , MESSAGE} from "../../actionTypes";
import {getCV} from "../../api/traineeAPI";
import {setCV} from "../../actions/trainee/getCVAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleLoadCV(action) {
    try {
        const trainee = yield call(getCV,action.payload);
        yield put(setCV(trainee));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchLoadCV() {
    yield  takeEvery(GET_CV.LOAD,handleLoadCV);
}

