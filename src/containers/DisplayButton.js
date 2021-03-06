import { connect } from 'react-redux'
import { setVisibilityDisplay } from '../actions'
import { clearGuess } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.display === state.visibilityDisplay
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(clearGuess())
    dispatch(setVisibilityDisplay(ownProps.display))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
