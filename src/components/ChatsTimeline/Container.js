import { connect } from 'react-redux'
import { Creators as ChatCreators } from '../../state/Chats'
import { Creators as UICreators } from '../../state/UI'
import Component from './Component'

const mapDispatchToProps = { ...ChatCreators, ...UICreators }

const getChatList = state =>
  state.chats.chatList

const filterFavourites = chats =>
  chats.filter(({ isFavourite }) => isFavourite)

const filterChats = state => {
  const chats = getChatList(state)

  switch(state.ui.chatsFilter) {
    default:
    case 'all' :
      return chats
    case 'favourites' :
      return filterFavourites(chats)
  }
}

const mapStateToProps = state => ({
  chatList: filterChats(state),
  ...state.ui
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
