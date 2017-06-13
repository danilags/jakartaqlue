import { combineReducers } from 'redux'

import qlueLocationReducer from './qlueLocationReducer'

const rootReducer = combineReducers({
  qlueLocation: qlueLocationReducer,
});

export default rootReducer;