import { CardDeck } from '../actions'

const cards = (state = CardDeck, action) => {
  switch (action.type) {
    case 'DEAL_CARD':
      return state.map(card =>
        (card.id === action.id)
          ? {...card, completed: true}
          : card
      )
    case 'SHUFFLE_CARDS':
      return "shuffled deck"//TBD
    default:
      return state
  }
}

export default cards
