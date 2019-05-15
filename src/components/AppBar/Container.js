import { connect } from 'react-redux'
import Component from './Component'
import { Creators } from '../../state/Chats'

const mapDispatchToProps = Creators

export default connect(
  ({ chats }) => chats,
  mapDispatchToProps
)(Component)
