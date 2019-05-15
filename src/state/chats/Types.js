import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createNewChat: ['title']
}, { prefix: 'CHATS_' })
