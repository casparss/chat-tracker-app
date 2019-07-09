import { configureStore } from '../utils/ConfigureStore'
import { reducer as chatReducer } from './Chats'
import { saga as chatSaga } from './Chats/Saga'
import { reducer as userReducer } from './User'
import { saga as userSaga } from './User/Saga'
import { reducer as coreReducer } from './Core/Reducer'
import { reducer as uiReducer } from './UI/Reducer'

const reducers = {
  chats: chatReducer,
  user: userReducer,
  core: coreReducer,
  ui: uiReducer
}

const sagas = [
  chatSaga,
  userSaga
]

export const store = configureStore(reducers, sagas)
