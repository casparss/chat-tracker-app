import { select, call, put, takeLatest } from 'redux-saga/effects'
import { Types, Creators } from './Types'
import { Types as UserTypes } from '../User/Types'
import ApiClient from '../../api/ApiClient'
import errorLogger from '../../utils/ErrorLogger'

const {
  createNewChatAttempt,
  createNewChatSuccess,
  createNewChatFailed,
  fetchChatsAttempt,
  fetchChatsSuccess,
  fetchChatsFailed,
  resetUI
} = Creators

function * loginSuccess() {
  yield put(fetchChatsAttempt())
}

function * fetchChats () {
  try {
    let request = yield call(() => ApiClient.fetch('chats/'))

    if(request.status === 'success') {
      yield put(fetchChatsSuccess(request.data))
    }
    else {
      yield put(fetchChatsFailed({ message: request.message }))
      yield errorLogger(request)
    }
  }
  catch(err) {
    yield put(fetchChatsFailed({ err }))
    yield errorLogger(err)
  }
}

function * createNewChat (data) {
  try {
    let request = yield call(() => ApiClient.post('chat/', data))

    if(request.status === 'success') {
      yield put(createNewChatSuccess(request.data))
    }
    else {
      yield put(createNewChatFailed({ message: request.message }))
      yield errorLogger(request)
    }
  }
  catch(err) {
    yield put(createNewChatFailed({ err }))
    yield errorLogger(err)
  }
}

export function * saga () {
  yield takeLatest(Types.FETCH_CHATS_ATTEMPT, fetchChats)
  yield takeLatest(Types.CREATE_NEW_CHAT_ATTEMPT, createNewChat)
  yield takeLatest(UserTypes.LOGIN_SUCCESS, loginSuccess)
}
