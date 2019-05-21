import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginAttempt: { email: '', password: '' },
  loginSuccess: ['user'],
  loginFailed: { message: null, err: null }
}, { prefix: 'USER_' })
