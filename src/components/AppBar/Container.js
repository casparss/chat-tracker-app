import { connect } from 'react-redux'
import Component from './Component'
import { Creators } from '../../state/Chats'

const mapDispatchToProps = {
  createNewChat: Creators.createNewChat
}

export default connect(
  undefined,
  mapDispatchToProps
)(Component)
