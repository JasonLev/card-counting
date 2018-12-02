import React from 'react'
import { connect } from 'react-redux'
import { shuffle } from '../actions'
import Card from './Card'


const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(shuffle())
  }
})

const Cards = props => {
  let cards = props.cards.map(card => {
    return <Card key={card.id} rank={card.rank} suit={card.suit} />
  })
  return (
    <div>
      <button onClick={props.onClick}>Shuffle/Reset</button>
      <button>Deal a card</button>
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
