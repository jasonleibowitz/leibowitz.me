// // modules
// import { expect } from 'chai';
// import { Map } from 'immutable';
//
// // aliased
// import { IDENTITY_UPDATED, LOGOUT_REQUESTED, LOGIN_SUCCESS } from 'actions/auth';
//
// // files
// import authReducer from '../auth';
//
// describe('auth reducer', () => {
//
//   let state;
//   beforeEach(() => {
//     state = Map({
//       user: null,
//       accessToken: null,
//       refreshToken: null,
//     });
//   });
//
//   it('should return initial state');
//
//   it('should default state.user from cache');
//
//   describe('IDENTITY_UPDATED', () => {
//     const type = IDENTITY_UPDATED;
//
//     it('should set state.user', () => {
//       const user = Map();
//       const nextState = authReducer(state, { type, user });
//       expect(nextState.get('user')).to.equal(user);
//     });
//
//     it('should cache user in localstorage');
//
//   });
//
//   describe('LOGIN_SUCCESS', () => {
//     it('should set state.accessToken and state.refreshToken', () => {
//       const type = LOGIN_SUCCESS;
//       const refreshToken = '123';
//       const accessToken = '234';
//       const tokens = { accessToken, refreshToken };
//       const nextState = authReducer(state, { type, tokens });
//       expect(nextState.get('accessToken')).to.equal(accessToken);
//       expect(nextState.get('refreshToken')).to.equal(refreshToken);
//     });
//   });
//
// });
