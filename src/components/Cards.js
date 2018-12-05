import React from 'react'
import { connect } from 'react-redux'
import { shuffle, dealCard, addCount, removeCard } from '../actions'
import Card from './Card'


const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onShuffle: () => {
    dispatch(shuffle())
  },
  onDeal: card => {
    dispatch(addCount(card.value))
    dispatch(dealCard(card.id))
    setTimeout(() => {
      dispatch(removeCard(card.id))
    }, 1500);
  }
})

const Cards = props => {
  let cards = props.cards.length ? props.cards.map(card => {
    return <Card key={card.id} rank={card.rank} suit={card.suit} flipped={card.completed}/>
  }) : "No cards in the deck. Press shuffle/reset to get a new deck of cards."
  let buttonRow = (
    <div className="button-row">
      <button onClick={props.onShuffle}>Shuffle/Reset</button>
      {props.cards.length > 0 &&
        <button onClick={() => props.onDeal(props.cards[props.cards.length - 1])}>
          Deal a card
        </button>
      }
    </div>
  )
  return (
    <div>
      {buttonRow}
      <div className="card-deck">
        {cards}
      </div>
    </div>
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)
