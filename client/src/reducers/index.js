import { combineReducers } from 'redux'

import qlueLocationReducer from './qlueLocationReducer'
import wazeLocationReducer from './wazeLocationReducer'

const rootReducer = combineReducers({
  qlueLocation: qlueLocationReducer,
  wazeLocation: wazeLocationReducer
});

export default rootReducer;