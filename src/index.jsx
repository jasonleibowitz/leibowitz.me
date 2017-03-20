// modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RedBox from 'redbox-react';
// import _ from 'lodash';

// aliased
import store from 'store';
import routes from 'routes';
// import { screenResize } from 'actions/ui';
// import { logError } from 'actions/error';

// components
import Index from 'components/Index/Index';

// side-effects
// import 'react-toolbox/lib/commons.scss';
import 'styles/global.pcss';


// Subscribe redux to window resize events
// debounced to prevent dispatch on every resize event
// window.addEventListener('resize', _.debounce(() => {
//   const { innerHeight: height = 0, innerWidth: width = 0 } = (window || {});
//   store.dispatch(screenResize({ height, width }));
// }, 250));

const rootDomElement = document.querySelector('#app-root');

// Accept hot module swaps
if (module && module.hot) module.hot.accept();

try {
  render((
    <Provider store={ store }>
      <Router routes={ routes }>
        <Index>
          { routes }
        </Index>
      </Router>
    </Provider>
  ), rootDomElement);
} catch (err) {
  // logError(Error(`Rendering Error: ${ err.message }`));
  render(<RedBox error={ err } />, rootDomElement);
}
