import { select, call, put, takeLatest } from 'redux-saga/effects'
import { Types as UserTypes } from '../User'
import { Types, Creators } from './Types'
import Api from '../../services/Api'
import { pick } from 'lodash'
import { selectUIInstance } from './Reducer'
const {
  getLengthsAttempt,
  getLengthsSuccess,
  getLengthsFailed,
  getGamesSuccess,
  getGamesFailed
} = Creators

export function * getLengths ({ _id }) {
  try {
    let request = yield call(Api.getGames, {
      type: 'lengths',
      by: 'User',
      _id
    })

    if(request.status === 'success') {
      yield put(getLengthsSuccess(
        request.data.lengths
      ))
    } else {
      yield put(getLengthsFailed({
        message: request.message || request.description
      }))
    }
  } catch(err) {
    yield put(getLengthsFailed({
      err
    }))
  }
}

export function * getGames ({ payload }) {
  try {
    const instance = yield select(({ games }) => selectUIInstance(games, payload))
    let request = yield call(Api.getGames, {
      type: 'filter',
      status: instance.statusFilter,
      ...payload
    })

    if(request.status === 'success') {
      yield put(getGamesSuccess({
        data: pick(request.data, ['games', 'lengths']),
        query: payload
      }))
    } else {
      yield put(getGamesFailed({
        message: request.message || request.description
      }))
    }
  } catch(err) {
    yield put(getGamesFailed({
      err
    }))
  }
}

export function * setStatusFilter(action) {
  yield call(getGames, {
    payload: pick(action, ['_id', 'by'])
  })
}

export function * onLoginSuccess ({ user }) {
  yield put(getLengthsAttempt(user._id))
}

export function * saga () {
  yield takeLatest(Types.GET_LENGTHS_ATTEMPT, getLengths)
  yield takeLatest(Types.GET_GAMES_ATTEMPT, getGames)
  yield takeLatest(Types.SET_STATUS_FILTER, setStatusFilter)
  yield takeLatest(UserTypes.LOGIN_SUCCESS, onLoginSuccess)
}
