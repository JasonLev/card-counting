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

export const Displays = {
  SHOW_CARDS: 'SHOW_CARDS',
  SHOW_GUESS_FORM: 'SHOW_GUESS_FORM',
  SHOW_COUNT: 'SHOW_COUNT'
}
export const CardDeck = [{
  id: 0,
  src: 'src for 0',
  value: 1
}]
