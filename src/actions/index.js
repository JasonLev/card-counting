export const setVisibilityDisplay = display => ({
  type: 'SET_VISIBILITY_DISPLAY',
  display
})

export const makeGuess = guess => ({
  type: 'MAKE_GUESS',
  guess
})

export const clearGuess = () => ({
  type: 'CLEAR_GUESS'
})

export const shuffle = () => ({
  type: 'SHUFFLE_CARDS'
})

export const dealCard = id => ({
  type: 'DEAL_CARD',
  id
})

export const removeCard = id => ({
  type: 'REMOVE_CARD',
  id
})

export const addCount = value => ({
  type: 'ADD_COUNT',
  value
})

export const Displays = {
  SHOW_CARDS: 'SHOW_CARDS',
  SHOW_GUESS_FORM: 'SHOW_GUESS_FORM',
  SHOW_COUNT: 'SHOW_COUNT'
}
