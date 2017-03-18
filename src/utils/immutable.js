// modules
import { Iterable } from 'immutable';

export const isImmutable = (value) => Iterable.isIterable(value);
