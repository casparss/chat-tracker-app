import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'orange',
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'purple',
  },
};

export default ({
  title,
  subject,
  body,
  people
}) =>
  <ListItem className="item-container" alignItems="flex-start">
    <div className="item-container-body">
      <ListItemText
        primary={title}
        secondary={body}
      />
      <div className="people-list">
        <Avatar>H</Avatar>
        <Avatar>N</Avatar>
        <Avatar>OP</Avatar>
      </div>
      <div className="chip-list">
        <Chip
          label="Brexit"
          onDelete={() => {}}
        />
        <Chip
          label="News"
          onDelete={() => {}}
        />
      </div>
    </div>
  </ListItem>
