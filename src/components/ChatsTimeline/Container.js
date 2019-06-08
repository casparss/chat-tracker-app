import { connect } from 'react-redux'
import { Creators } from '../../state/Chats'
import Component from './Component'

const mapDispatchToProps = Creators

const getChatList = state =>
  state.chats.chatList

const mapStateToProps = state => ({
  chatList: getChatList(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
