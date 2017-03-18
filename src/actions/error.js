// alias
import log from 'log';

export const logError = (err) => (dispatch) => {
  log.error(err);
};
