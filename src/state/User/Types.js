import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginAttempt: ['loginDetails'],
  loginSuccess: ['user'],
  loginFailed:['errMessage']
}, { prefix: 'USER_' })
