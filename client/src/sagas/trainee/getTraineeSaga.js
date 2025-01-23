import {takeEvery,  call, put} from 'redux-saga/effects';
import {GET_TRAINEE, MESSAGE} from "../../actionTypes";
import {getTrainee} from "../../api/traineeAPI";
import {setTrainee} from "../../actions/trainee/getTraineeAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleTraineeLoad(action) {
    try {
        const trainee = yield call(getTrainee,action.payload);
        yield put(setTrainee(trainee));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}

export default function* watchDemandLoad() {
    yield  takeEvery(GET_TRAINEE.LOAD,handleTraineeLoad);
}

