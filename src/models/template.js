// modules
import { Map, Record } from 'immutable';
import R from 'ramda';
import _ from 'lodash';

const defaults = {
  admin: false,
};

// transforms props api -> client
const transformInbound = R.evolve({
  address: Map(),
});

export default class Template extends Record({
  name: null,
  address: Map(),
  admin: null,
}) {
  constructor(props = {}) {
    const defaulted = _.defaults({}, props, defaults);
    const parsedProps = transformInbound(defaulted);

    // construct immutable record with new properties
    super(parsedProps);
  }
}
