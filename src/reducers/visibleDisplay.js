import { Displays } from '../actions'

const visibilityDisplay = (state = Displays.SHOW_COUNT, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_DISPLAY':
      return action.display
    default:
      return state
  }
}

export default visibilityDisplay
