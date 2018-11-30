import { CardDeck } from '../actions/cardDeck'

const cards = (state = CardDeck, action) => {
  switch (action.type) {
    case 'DEAL_CARD':
      return state.map(card =>
        (card.id === action.id)
          ? {...card, completed: true}
          : card
      )
    case 'SHUFFLE_CARDS':
      const deck = [...CardDeck]
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck
    default:
      return state
  }
}

export default cards
