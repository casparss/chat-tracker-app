import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore = (reducers, sagas = []) => {
  /**
   * Create Redux Saga middleware
   */
  const sagaMiddleware = createSagaMiddleware()
  /**
   * Create Redux store and then pass it into registerScreens to filter
   * down into all other screen components
   */
  const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )
  /**
   * Run Sagas
   */
  sagas.forEach(sagaMiddleware.run)
  return store
}
