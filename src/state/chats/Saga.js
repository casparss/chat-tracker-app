import { select, call, put, takeLatest } from 'redux-saga/effects'
import { Types, Creators } from './Types'
import Api from '../../api'
const {
  createNewChatAttempt,
  createNewChatSuccess,
  createNewChatFailed,
  fetchChatsAttempt,
  fetchChatsSuccess,
  fetchChatsFailed,
  resetUI
} = Creators

function * fetchChats () {
  try {
    let request = yield call(Api.chats.fetch)

    if(request.status === 'success') {
      yield put(fetchChatsSuccess(
        request.data
      ))
    } else {
      yield put(fetchChatsFailed({
        message: request.message
      }))
    }
  } catch(err) {
    yield put(fetchChatsFailed({
      err
    }))
  }
}

function * createNewChat ({ _id }) {
  try {
    let request = yield call(Api.chat.create)

    if(request.status === 'success') {
      yield put(createNewChatSuccess(
        request.data.lengths
      ))
    } else {
      yield put(createNewChatFailed({
        message: request.message
      }))
    }
  } catch(err) {
    yield put(createNewChatFailed({
      err
    }))
  }
}

export function * saga () {
  yield takeLatest(Types.FETCH_CHATS_ATTEMPT, fetchChats)
  yield takeLatest(Types.CREATE_NEW_CHAT_ATTEMPT, createNewChat)
}
