import { configureStore } from '../utils/ConfigureStore'
import { reducer as chatReducer } from './Chats'

const reducers = {
  chats: chatReducer
}

const sagas = [

]

export const store = configureStore(reducers, sagas)
