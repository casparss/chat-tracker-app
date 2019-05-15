import { createReducer } from 'reduxsauce'
import { Types } from './Types'

export const initialState = {
}

export const Handlers = {
  [Types.GET_LENGTHS_SUCCESS]: (state, { lengths }) => ({
    ...state,
    loggedInUserLengths: lengths
  }),
}

export const reducer = createReducer(initialState, Handlers)
