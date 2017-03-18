// module
import { Map } from 'immutable';

// alias
import { INCREMENT_COUNTER, RESET_COUNTER } from 'actions/counter';

const INITIAL_STATE = new Map({
  counter: 0,
});

export default function(state = INITIAL_STATE, action) {
  let counter = state.get('counter');

  switch (action.type) {
  case INCREMENT_COUNTER:
    return state.update('counter', () => ++counter);
  case RESET_COUNTER:
    return state.set('counter', 0);
  default:
    return state;
  }
}
