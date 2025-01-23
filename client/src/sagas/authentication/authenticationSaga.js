import {takeEvery, call, put} from 'redux-saga/effects';
import {AUTHENTICATION,MESSAGE} from "../../actionTypes";
import {authentication} from '../../api/usersAPI';
import {setUser,logged} from "../../actions/authentication/authenticationAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleAuthentication(action) {
    try {
        const token = yield call(authentication,action.payload);
        yield put(setUser(token));
        yield put(logged(token));
    }
    catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR ));
    }
}

export default function* watchAuthentication() {
    yield takeEvery(AUTHENTICATION.AUTH, handleAuthentication);
}