import { GET_WAZE_LOCATION } from '../actions/constants'

const wazeLocationReducer = (state = [], action) => {
  switch (action.type) {
    case GET_WAZE_LOCATION: {
      return action.payload
    }
    default: return state

  }
}

export default wazeLocationReducer