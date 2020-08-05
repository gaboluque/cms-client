import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { ROOT_PATH } from '../../routing/paths';
import showNotification from '../helpers/showNotification';
import { LOG_OUT_MOVEMENT } from '../movements/constants';

function* logOutPostAction({ manual }) {
  yield put(push(ROOT_PATH));
  localStorage.removeItem('token');
  if (manual) {
    showNotification({ type: 'success', message: 'Sesion finalizada' });
  }
}

export default [takeLatest([LOG_OUT_MOVEMENT], logOutPostAction)];
