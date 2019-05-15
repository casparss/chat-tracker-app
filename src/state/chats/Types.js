import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getLengthsAttempt: ['_id'],
  getLengthsSuccess: ['lengths'],
  getLengthsFailed: { message: null, err: null },
  getGamesAttempt: (payload) => ({ type: 'GAMES_GET_GAMES_ATTEMPT', payload }),
  getGamesSuccess: { data: {}, query: {} },
  getGamesFailed: { message: null, err: null },
  setStatusFilter: { by: '', _id: '', statusFilter: '' },
  clearGamesState: null,
  newGamesUI: { by: '', _id: '' },
  destroyGamesUI: { by: '', _id: '' }
}, { prefix: 'GAMES_' })
