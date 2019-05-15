import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab';
import './Style.scss'

class PrimarySearchAppBar extends React.Component {
  state = {
    chatTitle: ''
  }

  createNewChat = () => {
    this.props.createNewChat(this.state.chatTitle)
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
                <AddIcon />
              </div>
              <InputBase
                className="AppBar-input"
                onChange={this.updateInput}
                value={this.state.chatTitle}
                placeholder="Log a conversation…" />
            </div>
            <Fab
              onClick={this.createNewChat}
              className="AppBar-addButton"
              variant="extended"
              size="small"
              color="primary"
              aria-label="Add"
            ><AddIcon /></Fab>
          </Toolbar>
        </AppBar>
    )
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default PrimarySearchAppBar
