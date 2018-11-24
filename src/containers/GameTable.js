import React from 'react'
import { connect } from 'react-redux'
import { Displays } from '../actions'
import CurrentCount from '../components/CurrentCount'
import Cards from '../components/Cards'
import GuessForm from '../components/GuessForm'

const mapStateToProps = state => ({
  display: state.visibilityDisplay
})

const GameTable = props => {
  // switch (props.dislay) {
    // case Displays.SHOW_COUNT:
      console.log("show count from switch");
      return <CurrentCount />
  //   case Displays.SHOW_DEAL:
  //     return "Dealing"//<Cards />
  //   case Displays.SHOW_GUESS_FORM:
  //     return "Guessing"//<GuessForm />
  //   default:
  //     throw new Error('Unknown Display: ' + props.display)
  // }
}

export default connect(
  mapStateToProps
)(GameTable)
