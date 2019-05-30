import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import moment from 'moment'

export const initialState = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2YwMzZjOGUwYjBkOTAwMTBmZjc0YmIiLCJpYXQiOjE1NTkyNDY1MzZ9.VP5XIG1yRz5W-pf3bQ8fvsYpKVp3vmRGezQNfKzifsY'
}

export const Handlers = {
  [Types.LOGIN_ATTEMPT]: (state, payload) => ({
    ...state
  })
}

export const reducer = createReducer(initialState, Handlers)
