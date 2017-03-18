// Module
const { combineReducers } = require('redux-immutable');
const { Iterable, fromJS } = require('immutable');

const isImmutable = value => Iterable.isIterable(value);

// Shorthand for redux reducer creation
module.exports = class ImmutableReducer {
  static combine(reducers) {
    // http://redux.js.org/docs/api/combineReducers.html
    return combineReducers(reducers);
  }

  constructor(initialState, handlers = {}) {
    // Coerce the initial state into an immutable data structure if it is not already
    if (!isImmutable(initialState)) initialState = fromJS(initialState);

    // Return the actual reducer function
    return function immutableReducer(state = initialState, action) {
      // Default is state passthrough (no handler defined for this action)
      if (!handlers.hasOwnProperty(action.type)) return state;

      // Get the new state from the handler
      const newState = ('data' in action)
        ? handlers[action.type](action.data, state)
        : handlers[action.type](state, action);

      // Assert that the new state is immutable
      if (!isImmutable(newState)) {
        throw Error(`ImmutableReducer received mutable state from action ${ action.type }`);
      }

      return newState;
    };
  }
};
