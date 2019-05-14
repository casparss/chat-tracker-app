import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import './Style.scss'

class PrimarySearchAppBar extends React.Component {
  render() {
    return (
        <AppBar className="AppBar" position="static">
          <Toolbar className="AppBar-toolbar">
            <div className="AppBar-search">
              <div className="AppBar-searchIcon">
                <AddIcon />
              </div>
              <InputBase className="AppBar-input" placeholder="Log a conversation…" />
            </div>
          </Toolbar>
        </AppBar>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PrimarySearchAppBar;
