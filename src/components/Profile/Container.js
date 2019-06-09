import { connect } from 'react-redux'
import { Creators as UserCreators } from '../../state/User'
import Component from './Component'

const mapDispatchToProps = UserCreators

export default connect(
  undefined,
  mapDispatchToProps
)(Component)
