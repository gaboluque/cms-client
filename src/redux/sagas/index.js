import { all } from 'redux-saga/effects';
import listeners from './listeners';
import postActions from './postActions';

export default function* rootSaga() {
  yield all([...listeners, ...postActions]);
}
