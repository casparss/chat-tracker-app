import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  appStarted: null,
  showLoadingModal: ['message'],
  hideLoadingModal: null
}, { prefix: 'CORE_' })
