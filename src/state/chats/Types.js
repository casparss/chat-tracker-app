import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createNewChatAttempt: ['title'],
  createNewChatSuccess: ['newChat'],
  createNewChatFailed: { message: null, err: null },
  resetUI: null
}, { prefix: 'CHATS_' })
