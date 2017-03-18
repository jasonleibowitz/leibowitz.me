//Applications
import { NOTIFICATION_CREATED, NOTIFICATION_RESOLVED } from 'actions/notification';
import ImmutableReducer from 'utils/ImmutableReducer';

const INITIAL_STATE = {
  all: [],
};

export default new ImmutableReducer(INITIAL_STATE, {
  [NOTIFICATION_CREATED](state, { data }) {
    return state.set('all', data);
  },

  [NOTIFICATION_RESOLVED](state) {
    return state.set('all', []);
  },
});
