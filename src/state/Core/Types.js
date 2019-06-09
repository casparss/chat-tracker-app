import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  appStarted: null,
  showLoadingSpinner: ['message'],
  hideLoadingSpinner: null
}, { prefix: 'CORE_' })
