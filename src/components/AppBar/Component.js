import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import AddChatToolbar from '../AddChatToolbar'
import './Style.scss'

class PrimarySearchAppBar extends React.Component {
  render() {
    return (
        <AppBar className="AppBar">
          <AddChatToolbar />
        </AppBar>
    )
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default PrimarySearchAppBar
