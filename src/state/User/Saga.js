import { call, put, takeLatest } from 'redux-saga/effects'
import { Types, Creators } from './Types'
import ApiClient from '../../api/ApiClient'
import errorLogger from '../../utils/ErrorLogger'

const {
  loginAttempt,
  loginSuccess,
  loginFailed
} = Creators

const loginRequest = ({ email, password }) =>
  ApiClient.fetch(`/user?email=${email}&password=${password}`)

function * login ({ loginDetails }) {
  try {
    const request = yield call(loginRequest, loginDetails)

    if(request.status === 'success') {
      yield put(loginSuccess(request.data))
    } else {
      yield put(loginFailed(request.message))
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
