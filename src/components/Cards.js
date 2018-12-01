import React from 'react'
import { connect } from 'react-redux'
import { shuffle } from '../actions'
import Card from './Card'


const mapStateToProps = state => ({
  cards: state.cards
})

const Cards = ({dispatch}, props) => {
  return (
    <div>
      <button onClick={() => dispatch(shuffle())}>Shuffle/Reset</button>
      <button>Deal a card</button>
      <div>
        {props.cards}
      </div>
    </div>
  )
}
export default connect(
  mapStateToProps
)(Cards)
