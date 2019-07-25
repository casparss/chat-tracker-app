import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  openAddChat: null,
  closeAddChat: null,
  switchFilter: ['filter']
}, { prefix: 'UI_' })
