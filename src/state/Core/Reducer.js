import { createReducer } from 'reduxsauce'
import { Types } from './Types'

export const initialState = {
  loading: {
    isLoading: true,
    message: null
  }
}

export const Handlers = {
  [Types.SHOW_LOADING_MODAL]: (state, { message }) => ({
    ...state,
    loading: {
      isLoading: true,
      message: !message || message
    }
  }),
  [Types.HIDE_LOADING_MODAL]: state => ({
    ...state,
    loading: {
      isLoading: false,
      message: null
    }
  })
}

export const reducer = createReducer(initialState, Handlers)
