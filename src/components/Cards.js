import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  cards: state.cards
})

const Cards = () => (
  <div>
    <button>Shuffle/Reset</button>
    <button>Deal a card</button>
  </div>
)
export default connect(
  mapStateToProps
)(Cards)
