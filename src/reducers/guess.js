const guess = (state = null, action) => {
  switch (action.type) {
    case 'MAKE_GUESS':
      return action.guess
    case 'CLEAR_GUESS':
      return null
    default:
      return state
  }
}

export default guess
