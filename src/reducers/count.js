const count = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + action.value
    default:
      return state
  }
}

export default count
