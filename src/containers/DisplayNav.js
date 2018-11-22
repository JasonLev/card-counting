import React from 'react'
import DisplayButton from './DisplayButton'
import { Displays } from '../actions'

const DisplayNav = () => (
  <div>
    <DisplayButton display={Displays.SHOW_COUNT}>
      See current count
    </DisplayButton>
    <DisplayButton display={Displays.SHOW_DEAL}>
      Deal a card
    </DisplayButton>
    <DisplayButton display={Displays.SHOW_GUESS_FORM}>
      Guess the count
    </DisplayButton>
  </div>
)

export default DisplayNav
