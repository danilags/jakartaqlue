import { GET_QLUE_LOCATION } from '../actions/constants'

const qlueLocationReducer = (state = [], action) => {
  switch (action.type) {
    case GET_QLUE_LOCATION: {
      return action.payload
    }
    default: return state
  }
}

export default qlueLocationReducer