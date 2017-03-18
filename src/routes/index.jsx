// module
import React from 'react';
import { Route } from 'react-router-dom';

// Component
import About from 'views/About/About';
import Home from 'views/Home/Home';

export default (
  <div>
    <Route exact={ true } path='/' component={ Home } />
    <Route exat={ true } path='/about' component={ About } />
  </div>
);
