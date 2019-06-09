import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import moment from 'moment'

export const initialState = {
  token: null
}

export const Handlers = {
  [Types.LOGIN_ATTEMPT]: (state, payload) => ({
    ...state
  }),
  [Types.LOGIN_SUCCESS]: (state, { user }) => ({
    ...state,
    ...user,
    isloggedIn: true
  })
}

export const reducer = createReducer(initialState, Handlers)
