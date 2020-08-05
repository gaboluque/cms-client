import { put, take, takeLatest } from 'redux-saga/effects';
import { hideLoaderMovement, showLoaderMovement } from '../movements/loaderMovements';
import { hideSpinnerMovement, showSpinnerMovement } from '../movements/spinnerMovements';

const isLoaderNotifier = ({ notifier, loader }) => notifier && loader;
const isSpinnerNotifier = ({ notifier, spinner }) => notifier && spinner;

function* loaderListener({ type: actionName }) {
  yield put(showLoaderMovement());
  yield take(({ type, action }) => action && type.includes(actionName));
  yield put(hideLoaderMovement());
}

function* spinnerListener({ type: actionName }) {
  yield put(showSpinnerMovement());
  yield take(({ type, action }) => action && type.includes(actionName));
  yield put(hideSpinnerMovement());
}

export default [
  takeLatest(isLoaderNotifier, loaderListener),
  takeLatest(isSpinnerNotifier, spinnerListener),
];
