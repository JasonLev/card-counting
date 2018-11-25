import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  cards: state.cards
})

const Cards = () => (
  <div>
    "cards"
  </div>
)
export default connect(
  mapStateToProps
)(Cards)
