import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  guess: state.guess
})

const GuessForm = () => (
  <div>
    "Guess the count"
  </div>
)
export default connect(
  mapStateToProps
)(GuessForm)
