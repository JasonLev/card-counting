import React from 'react'
import { connect } from 'react-redux'
import DisplayButton from './DisplayButton'
import { Displays } from '../actions'

const mapStateToProps = state => ({
  display: state.visibilityDisplay
})

const DisplayNav = () => (
  <div>
    <DisplayButton display={Displays.SHOW_COUNT}>
      See current count
    </DisplayButton>
    <DisplayButton display={Displays.SHOW_CARDS}>
      Cards
    </DisplayButton>
    <DisplayButton display={Displays.SHOW_GUESS_FORM}>
      Guess the count
    </DisplayButton>
  </div>
)
export default connect(
  mapStateToProps
)(DisplayNav)
