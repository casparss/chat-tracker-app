import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  persistentLogin: null,
  loginAttempt: ['loginDetails'],
  loginSuccess: ['user'],
  loginFailed: ['errMessage'],
  logout: null
}, { prefix: 'USER_' })
