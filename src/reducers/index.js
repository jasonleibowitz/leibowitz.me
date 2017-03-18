// modules
import { combineReducers } from 'redux-immutable';

// files
import counter from './counter';
import notification from './notification';

export default combineReducers({
  counter,
  notification,
});
