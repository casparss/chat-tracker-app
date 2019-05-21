import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createNewChatAttempt: { title: '', body: '', subject: '' },
  createNewChatSuccess: ['newChat'],
  createNewChatFailed: { message: null, err: null },
  fetchChatsAttempt: null,
  fetchChatsSuccess: ['chats'],
  fetchChatsFailed: { message: null, err: null },
  resetUI: null
}, { prefix: 'CHATS_' })
