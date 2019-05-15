import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = ({ chats: { chatList } }) => ({ chatList })

export default connect(
  mapStateToProps
)(Component)
