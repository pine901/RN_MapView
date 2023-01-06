import {put, call, takeLatest} from 'redux-saga/effects';
import { LOAD_APP_DATA } from "../actions/types";

export function* loadAppDataSaga() {
}

export function* watchLoadAppDataSaga() {
  yield takeLatest(LOAD_APP_DATA, loadAppDataSaga);
}
