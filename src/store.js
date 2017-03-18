// Module
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

// Aliased
import { isImmutable } from 'utils/immutable';
import reducers from 'reducers';
import config from 'config';

const middleware = [reduxThunk];

/* istanbul ignore if */
if (config.env === 'development') {
  const stateTransformer = (state) => {
    if (isImmutable(state)) return state.toJS();
    return state;
  };

  const logger = createLogger({ collapsed: true, stateTransformer });
  middleware.push(logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));
export default createStore(reducers, Map({}), enhancer);
