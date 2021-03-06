import { connect } from 'react-redux'
import { Creators } from '../../state/Core'
import Component from './Component'

const mapDispatchToProps = Creators

const getLoggedIn = state =>
  state.user.isloggedIn

const getIsLoading = state =>
  state.core.loading.isLoading

const mapStateToProps = state => ({
  isloggedIn: getLoggedIn(state),
  isLoading: getIsLoading(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
