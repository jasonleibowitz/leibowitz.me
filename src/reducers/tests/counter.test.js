// modules
import { expect } from 'chai';
import { Map } from 'immutable';

// alias
import { INCREMENT_COUNTER, RESET_COUNTER } from 'actions/counter';

// files
import counterReducer from '../counter';

describe('Counter Reducer', () => {
  let state, nextState;

  describe('INCREMENT_COUNTER', () => {
    it('should add 1 to the current counter', () => {
      state = Map({ counter: 0 });
      nextState = counterReducer(state, { type: INCREMENT_COUNTER });
      expect(nextState.get('counter')).to.eql(1);

      nextState = counterReducer(nextState, { type: INCREMENT_COUNTER });
      expect(nextState.get('counter')).to.eql(2);
    });
  });

  describe('RESET_COUNTER', () => {
    it('makes the counter 0', () => {
      state = Map({ counter: 4 });
      expect(state.get('counter')).to.eql(4);

      nextState = counterReducer(state, { type: RESET_COUNTER });
      expect(nextState.get('counter')).to.eql(0);
    });
  });
});
