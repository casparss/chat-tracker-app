import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import { Types as ChatsTypes } from '../Chats/Types'

const chatFilterOption = {
  ALL: 'all',
  FAVOURITES: 'favourites'
}

export const initialState = {
  isChatModalOpen: false,
  chatsFilter: chatFilterOption.ALL
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
  }),
  [Types.SWITCH_FILTER]: (state, { filter }) => ({
    ...state,
    chatsFilter: filter
  }),
}

export const reducer = createReducer(initialState, Handlers)
