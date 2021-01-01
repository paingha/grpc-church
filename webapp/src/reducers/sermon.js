const init = {
    sermons: [],
    isFetching: false,
    getting: false,
    sermon: {},
    error: null
  }
  
  export default function sermon(state = init, action) {
    if (typeof state === "undefined") {
      return {
        sermons: [],
        isFetching: false,
        error: null
      }
    }
  
    switch (action.type) {
      case "REQUEST_SERMON":
        return {
          ...state,
          isFetching: true
        }
      case "RECEIVE_SERMON":
        return {
          ...state,
          sermons: action.sermons,
          isFetching: false
        }
      case "ERROR_SERMON":
        return {
          ...state,
          isFetching: false,
          error: action.error
        }
      case "REQUEST_SINGLE_SERMON":
        return {
          ...state,
          getting: true
        }
      case "RECEIVE_SINGLE_SERMON":
        return {
          ...state,
          sermon: action.sermon,
          getting: false
        }
      case "ERROR_SINGLE_SERMON":
        return {
          ...state,
          getting: false,
          error: action.error
        }
      default:
        return state
    }
  }
  