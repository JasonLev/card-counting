import React from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions'
import { setVisibilityDisplay } from '../actions'
import { Displays } from '../actions'

const GuessForm = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value) {
        return
      }
      dispatch(makeGuess(parseInt(input.value)))
      dispatch(setVisibilityDisplay(Displays.SHOW_COUNT))
      input.value = ''
    }}>
      <input ref={node => input = node}
             type="number"
             min="-26"
             max="26" />
      <button type="submit">
        Make A Guess
      </button>
    </form>
  )
}

export default connect()(GuessForm)
