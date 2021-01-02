// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunkMiddleware from "redux-thunk"

export function prepareStore(initial) {
  return createStore(rootReducer, initial, applyMiddleware(thunkMiddleware))
}
