// modules
import { expect } from 'chai';
import { Map } from 'immutable';

// alias
import { INCREMENT_COUNTER, RESET_COUNTER } from 'actions/counter';

// files
import counterReducer from '../counter';

describe('Counter Reducer', () => {
  let state;
  beforeEach(() => {
    state = Map({ counter: 0 });
  });

  describe('INCREMENT_COUNTER', () => {
    it('should add 1 to the current counter', () => {
      const nextState = counterReducer(state, { type: INCREMENT_COUNTER });
      expect(nextState.get('counter')).to.eql(1);
    });
  });
});
