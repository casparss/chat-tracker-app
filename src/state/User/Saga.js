import { call, put, takeLatest } from 'redux-saga/effects'
import { Types, Creators } from './Types'
import { Creators as CoreCreators } from '../Core'
import ApiClient from '../../api/ApiClient'
import errorLogger from '../../utils/ErrorLogger'

const {
  loginSuccess,
  loginFailed,
  persistentLogin
} = Creators

function * onAppStarted () {
  yield put(persistentLogin())
}

const loginRequest = ({ email, password }) =>
  ApiClient.fetch(`/user?email=${email}&password=${password}`)

function * login ({ loginDetails }) {
  try {
    yield put(CoreCreators.showLoadingSpinner())
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

const persistentLogin = () => {

}

export function * saga () {
  yield takeLatest(Types.LOGIN_ATTEMPT, login)
  yield takeLatest(Types.PERSISTENT_LOGIN, persistentLogin)
  yield takeLatest(Types.APP_STARTED, onAppStarted)
}
