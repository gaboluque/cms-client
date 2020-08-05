import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default (history) =>
  combineReducers({
    form: formReducer,
    router: connectRouter(history),
  });
