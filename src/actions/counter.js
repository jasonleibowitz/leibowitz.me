// alias
import { logError } from 'actions/error';

// action types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export function increment() {
  return async function thunk(dispatch) {
    try {
      dispatch({ type: INCREMENT_COUNTER });
    } catch (err) {
      dispatch(logError(err));
    }
  };
}

export function reset() {
  return async function thunk(dispatch) {
    try {
      dispatch({ type: RESET_COUNTER });
    } catch (err) {
      dispatch(logError(err));
    }
  };
}
