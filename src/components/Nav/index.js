import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
  root: {
    width: '100%',
  },
};

const Nav = ({ classes, location }) =>
  <BottomNavigation
    showLabels
    className={classes.root}
    value={location.pathname}
  >
    <BottomNavigationAction
      label="Profile"
      icon={<RestoreIcon />}
      component={NavLink}
      value="/profile"
      to="/profile"
    />

    <BottomNavigationAction
      label="Chats"
      icon={<FavoriteIcon />}
      component={NavLink}
      value="/chats"
      to="/chats"
    />
  </BottomNavigation>

export default withRouter(withStyles(styles)(Nav));
