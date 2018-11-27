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

const suits = ["♠︎", "♥︎", "♣︎", "♦︎"]
const labels = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
export const CardDeck = [
  {
    id: 0,
    name: "ace of spades",
    suit: suits[0],
    label: labels[0],
    value: -1,
    completed: false
  },
  {
    id: 1,
    name: "deuce of spades",
    suit: suits[0],
    label: labels[1],
    value: 1,
    completed: false
  }
]
