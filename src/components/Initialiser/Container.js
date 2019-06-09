import { connect } from 'react-redux'
import { Creators } from '../../state/Core'
import Component from './Component'

const mapDispatchToProps = Creators

const getLoggedIn = state =>
  state.user.isloggedIn

const mapStateToProps = state => ({
  isloggedIn: getLoggedIn(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
