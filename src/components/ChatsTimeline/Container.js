import { connect } from 'react-redux'
import { Creators } from '../../state/Chats'
import Component from './Component'

const mapDispatchToProps = Creators

const mapStateToProps = ({ chats: { chatList } }) => ({ chatList })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
