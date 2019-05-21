import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import moment from 'moment'

export const initialFetchState = {
  isFetching: false,
  isFetchSuccess: null
}

export const initialState = {
  ...initialFetchState,
  chatList: []
}

const newChatItem = title => ({
  id: null,
  title,
  subject: '',
  body: '',
  people: [],
  date: moment()
})

export const Handlers = {
  [Types.FETCH_CHATS_ATTEMPT]: state => ({
    ...state,
    isFetching: true
  }),
  [Types.FETCH_CHATS_FAILED]: state => ({
    ...state,
    isFetching: false
  }),
  [Types.FETCH_CHATS_SUCCESS]: (state, chats) => ({
    ...state,
    chatList: [...chats.chats, ...state.chatList],
    isFetching: false,
    isFetchSuccess: true
  }),
  [Types.CREATE_NEW_CHAT_ATTEMPT]: (state, { title }) => ({
    ...state,
    chatList: [newChatItem(title), ...state.chatList],
    isFetching: true
  }),
  [Types.CREATE_NEW_CHAT_FAILED]: (state, payload) => ({
    ...state,
    isFetching: false
  }),
  [Types.CREATE_NEW_CHAT_SUCCESS]: (state, chat) => ({
    ...state,
    chatList: [chat, ...state.chatList],
    isFetching: false,
    isFetchSuccess: true
  }),
  [Types.RESET_UI]: state => ({
    ...state,
    ...initialFetchState
  })
}

export const reducer = createReducer(initialState, Handlers)
