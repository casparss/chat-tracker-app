import { connect } from 'react-redux'
import { Creators as ChatCreators } from '../../state/Chats'
import { Creators as UICreators } from '../../state/UI'
import Component from './Component'

const mapDispatchToProps = { ...ChatCreators, ...UICreators }

const getChatList = state =>
  state.chats.chatList

const mapStateToProps = state => ({
  chatList: getChatList(state),
  ...state.ui
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
