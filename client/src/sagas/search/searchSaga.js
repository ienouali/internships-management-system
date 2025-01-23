import {takeEvery,  call, put} from 'redux-saga/effects';
import {MESSAGE, SEARCH} from "../../actionTypes";
import {search} from "../../api/searchAPI";
import {setData} from "../../actions/search/searchAction";
import {setMessage} from "../../actions/msg/messsageAction";

function* handleSearch(action) {
    try {
        const data = yield call(search,action.payload);
        yield put(setData(data));
    }  catch (err) {
        yield put(setMessage(err.toString(),MESSAGE.MESSAGE_ERROR));
    }
}


export default function* watchSearch() {
    yield  takeEvery(SEARCH.SEARCH_LOAD,handleSearch);
}

