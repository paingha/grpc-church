import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunkMiddleware from "redux-thunk"

export function prepareStore(initial) {
  return createStore(rootReducer, initial, applyMiddleware(thunkMiddleware))
}
