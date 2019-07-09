import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import { Types as ChatsTypes } from '../Chats/Types'

export const initialState = {
  isChatModalOpen: false
}

export const Handlers = {
  [Types.OPEN_ADD_CHAT]: state => ({
    ...state,
    isChatModalOpen: true
  }),
  [Types.CLOSE_ADD_CHAT]: state => ({
    ...state,
    isChatModalOpen: false
  }),
  [ChatsTypes.CREATE_NEW_CHAT_SUCCESS]: state => ({
    ...state,
    isChatModalOpen: false
  })
}

export const reducer = createReducer(initialState, Handlers)
