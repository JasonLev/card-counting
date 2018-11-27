import { combineReducers } from 'redux'
// import cards from './cards'
import visibilityDisplay from './visibleDisplay'
import count from './count'
import guess from './guess'

export default combineReducers({
//   cards,
  visibilityDisplay,
  count,
  guess
})
