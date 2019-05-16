import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase'
import ChatIcon from '@material-ui/icons/ChatBubble'
import Toolbar from '@material-ui/core/Toolbar'
import FabButton from '../FabButton'
import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';
import './Style.scss'
const { Haptics } = Plugins;

export default class AddChatToolbar extends Component {
  state = {
    chatTitle: ''
  }

  render() {
    return (
      <Toolbar className="AddChatToolbar">
        <div className="AddChatToolbar-search">
          <div className="AddChatToolbar-searchIcon">
            <ChatIcon />
          </div>
          <InputBase
            className="AddChatToolbar-input"
            onChange={this.updateInput}
            value={this.state.chatTitle}
            placeholder="Log a conversation…" />
        </div>
        <FabButton
          disabled={!this.props.isFetching && this.state.chatTitle === ""}
          onClick={!this.props.isFetching && this.createNewChat}
        />
      </Toolbar>
    )
  }

  createNewChat = () => {
    this.props.createNewChatAttempt(this.state.chatTitle)
    this.clearInput()
  }

  updateInput = (e) => this.setState({ chatTitle: e.target.value })

  clearInput = () => this.setState({ chatTitle: '' })
}
