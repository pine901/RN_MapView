import {all} from 'redux-saga/effects';
import {watchLoadAppDataSaga} from './appSaga';
export default function* sagas() {
  yield all([
    // App
    watchLoadAppDataSaga( ),
  ]);
}
