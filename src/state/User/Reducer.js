import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import moment from 'moment'

export const initialState = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2UyZjhkNDUyMGQwYzAzYjVkY2ZkN2IiLCJpYXQiOjE1NTg0NDg0NzB9._UHyph-FYq-VFNveaSrfvfIJ_BaWCFiOYbC8muua6To'
}

export const Handlers = {
  [Types.LOGIN_ATTEMPT]: (state, payload) => ({
    ...state
  })
}

export const reducer = createReducer(initialState, Handlers)
