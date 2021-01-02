// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import { combineReducers } from "redux"
import sermon from "./sermon"

const reducers = {
  sermon,
}

export default combineReducers(reducers)
