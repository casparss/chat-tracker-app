import { call, put, takeLatest } from 'redux-saga/effects'
import { Types, Creators } from './Types'
import { Creators as CoreCreators, Types as CoreTypes } from '../Core'
import ApiClient from '../../api/ApiClient'
import errorLogger from '../../utils/ErrorLogger'
import toast from '../../utils/Toast'
import * as storage from '../../utils/Storage'

function * onAppStarted () {
  yield put(Creators.persistentLogin())
}

const loginRequest = ({ email, password }) =>
  ApiClient.fetch(`user?email=${email}&password=${password}`)

function * login ({ loginDetails }) {
  const { loginSuccess, loginFailed } = Creators

  try {
    yield put(CoreCreators.showLoadingSpinner())
    const request = yield call(loginRequest, loginDetails)

    if(request.status === 'success') {
      yield put(loginSuccess(request.data))
    }
    else {
      yield put(loginFailed(request.message))
    }
  }
  catch(e) {
    yield put(loginFailed(e.message))
    yield call(errorLogger, e)
  }
}

function * loginSuccess ({ user }) {
  yield call(storage.set, 'token', user.token)
}

function * loginFailed ({ errMessage }) {
  yield put(CoreCreators.hideLoadingSpinner())
  yield call(toast, errMessage)
}

export function * saga () {
  yield takeLatest(Types.LOGIN_ATTEMPT, login)
  yield takeLatest(Types.LOGIN_SUCCESS, loginSuccess)
  yield takeLatest(Types.LOGIN_FAILED, loginFailed)
  yield takeLatest(CoreTypes.APP_STARTED, onAppStarted)
}
