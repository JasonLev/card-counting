import React from 'react'
import { connect } from 'react-redux'
import { Displays } from '../actions'
import CurrentCount from '../components/CurrentCount'
import Cards from '../components/Cards'
import GuessForm from '../components/GuessForm'
import DisplayNav from './DisplayNav'

const mapStateToProps = state => ({
  display: state.visibilityDisplay
})

const GameTable = props => {
  let display
  switch (props.display) {
    case Displays.SHOW_COUNT:
      display = <CurrentCount />
    case Displays.SHOW_DEAL:
      display = "Dealing"//<Cards />
    case Displays.SHOW_GUESS_FORM:
      display = "Guessing"//<GuessForm />
    default:
      throw new Error('Unknown Display: ' + props.display)
  }

  return (
    <div>
      <DisplayNav />
      {display}
    </div>
  )
}

export default connect(
  mapStateToProps
)(GameTable)
