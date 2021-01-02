// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

export function requestSermon() {
    return {
      type: "REQUEST_SERMON"
    }
  }
  
  export function receiveSermon(sermons) {
    return {
      type: "RECEIVE_SERMON",
      sermons
    }
  }
  
  export function errorSermon(error) {
    return {
      type: "ERROR_SERMON",
      error
    }
  }
  
  export function requestSingleSermon() {
    return {
      type: "REQUEST_SINGLE_SERMON"
    }
  }
  
  export function receiveSingleSermon(sermon) {
    return {
      type: "RECEIVE_SINGLE_SERMON",
      sermon
    }
  }
  
  export function errorSingleSermon(error) {
    return {
      type: "ERROR_SINGLE_SERMON",
      error
    }
  }
  