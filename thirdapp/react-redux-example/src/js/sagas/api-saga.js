import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_REQUESTED } from "../actions/actiontypes";

function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: "DATA_LOADED", payload });
    } catch (e) {
        yield put({ type: "API_ERRORED", payload: e });
    }
}

const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
}

export default watcherSaga
