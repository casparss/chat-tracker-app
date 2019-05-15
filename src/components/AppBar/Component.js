import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import ChatIcon from '@material-ui/icons/ChatBubble'
import FabButton from '../FabButton'
import './Style.scss'

class PrimarySearchAppBar extends React.Component {
  state = {
    chatTitle: ''
  }

  createNewChat = () => {
    this.props.createNewChatAttempt(this.state.chatTitle)
    this.clearInput()
  }
  updateInput = (e) => this.setState({ chatTitle: e.target.value })

  clearInput = () => this.setState({ chatTitle: '' })

  render() {
    return (
        <AppBar className="AppBar">
          <Toolbar className="AppBar-toolbar">
            <div className="AppBar-search">
              <div className="AppBar-searchIcon">
                <ChatIcon />
              </div>
              <InputBase
                className="AppBar-input"
                onChange={this.updateInput}
                value={this.state.chatTitle}
                placeholder="Log a conversation…" />
            </div>
            <FabButton
              disabled={!this.props.isFetching && this.state.chatTitle === ""}
              onClick={!this.props.isFetching && this.createNewChat}
            />
          </Toolbar>
        </AppBar>
    )
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default PrimarySearchAppBar
