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
    }, 3000);
  }
})

const Cards = props => {
  let cards = props.cards.map(card => {
    return <Card key={card.id} rank={card.rank} suit={card.suit} flipped={card.completed}/>
  })
  return (
    <div>
      <button onClick={props.onShuffle}>Shuffle/Reset</button>
      <button onClick={() => props.onDeal(props.cards[props.cards.length - 1])}>Deal a card</button>
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
