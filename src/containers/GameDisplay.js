import React from 'react'
import { connect } from 'react-redux'
import { Displays } from '../actions'
import CurrentCount from '../components/CurrentCount'
import Cards from '../components/Cards'
import GuessForm from '../components/GuessForm'

const mapStateToProps = state => ({
  display: state.visibilityDisplay
})

const GameDisplay = props => {
  switch (props.display) {
    case Displays.SHOW_COUNT:
      return <CurrentCount />
    case Displays.SHOW_CARDS:
      return <Cards />
    case Displays.SHOW_GUESS_FORM:
      return <GuessForm />
    default:
      throw new Error('Unknown Display: ' + props.display)
  }
}

export default connect(
  mapStateToProps
)(GameDisplay)
