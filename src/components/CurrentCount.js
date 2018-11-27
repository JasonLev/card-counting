import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.count,
  guess: state.guess
})

const CurrentCount = props => {
  let guessText = (
    <div>
      <h2>Your guess: {props.guess}</h2>
      <h2>{props.guess === props.count ? "Correct guess!" : "Wrong guess, sorry."}</h2>
    </div>
  )
  return (
    <div>
      <h1>The current count is: {props.count}</h1>
      {props.guess !== null && guessText}
    </div>
  )
}

export default connect(
  mapStateToProps
)(CurrentCount)
