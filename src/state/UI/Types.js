import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  openAddChat: null,
  closeAddChat: null
}, { prefix: 'UI_' })
