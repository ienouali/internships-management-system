import {takeEvery,  call, put} from 'redux-saga/effects';
import {DETAILS_TRAINEE, MESSAGE} from "../../actionTypes";
import {getDetailsTrainee} from "../../api/traineeAPI";
import {setDetailsTrainee} from "../../actions/trainee/detailsTraineeAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleDetailsTraineeLoad(action) {
    try {
        const detailsTrainee = yield call(getDetailsTrainee,action.payload);
        yield put(setDetailsTrainee(detailsTrainee));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchDetailsTraineeLoad() {
    yield  takeEvery(DETAILS_TRAINEE.LOAD,handleDetailsTraineeLoad);
}

