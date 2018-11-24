import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.count
})

const CurrentCount = props => <h1>The current count is: {props.count}</h1>

export default connect(
  mapStateToProps
)(CurrentCount)
