import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = ({
  chats
}) => ({
  chats
})

export default connect(
  mapStateToProps
)(Component)
