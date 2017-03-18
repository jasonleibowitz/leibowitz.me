// alias
import { logError } from 'actions/error';

// action types
export const NOTIFICATION_CREATED = 'NOTIFICATION_CREATED';
export const NOTIFICATION_RESOLVED = 'NOTIFICATION_RESOLVED';

export function confirm(error) {
  return async function thunk(dispatch) {
    try {
      dispatch({ type: NOTIFICATION_CREATED, error });
    } catch (err) {
      dispatch(logError(err));
    }
  };
}
