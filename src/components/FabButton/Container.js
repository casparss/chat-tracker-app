import { connect } from 'react-redux'
import Component from './Component'
import { Creators } from '../../state/Chats'

const computeButtonState = ({
  isFetching,
  isFetchSuccess
}) => {
  if(isFetching) {
    return 'loading'
  }
  else if(isFetchSuccess){
    return 'complete'
  }
  else {
    return 'initial'
  }
}

const mapStateToProps = ({ chats }) => ({
  chatList: chats.chatList,
  buttonState: computeButtonState(chats),
  isLoading: chats.isFetching
})

const mapDispatchToProps = Creators

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
