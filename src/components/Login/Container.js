import { connect } from 'react-redux'
import { Creators as UserCreators } from '../../state/User'
import Component from './Component'
import { Creators as CoreCreators } from '../../state/Core'

const mapDispatchToProps = { ...UserCreators, ...CoreCreators }

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
