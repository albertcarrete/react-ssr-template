import thunk from 'redux-thunk'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

export default function(initialState={}){
  const store = createStore(reducers, initialState, applyMiddleware(thunk))
  // module hot logic goes here
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept()
  }
  return store
}
