import { call, put, takeLatest } from 'redux-saga/effects'
import { Types, Creators } from './Types'
import ApiClient from '../../api/ApiClient'
import errorLogger from '../../utils/ErrorLogger'

const {
  loginAttempt,
  loginSuccess,
  loginFailed
} = Creators

const loginRequest = body => ApiClient.fetch(`/user`, { body })

function * login ({ loginDetails }) {
  try {
    const request = yield call(loginRequest, loginDetails)

    if(request.status === 'success') {
      yield put(loginSuccess(request.data))
    } else {
      yield put(loginFailed(request.data.message))
    }
  }
  catch(e) {
    yield put(loginFailed(e.message))
    yield call(errorLogger, e)
  }
}


export function * saga () {
  yield takeLatest(Types.LOGIN_ATTEMPT, login)
}
