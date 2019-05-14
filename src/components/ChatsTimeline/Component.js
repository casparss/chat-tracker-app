import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import './Style.scss'

export default ({ items = [] }) =>
  <div className="ChatsTimeline">
    <List>
      {items.map((props) => <TimelineItem {...props} />)}
    </List>
  </div>

const TimelineItem = ({
    title,
    subject,
    body,
    people
  }) =>
    <ListItem className="TimelineItem" alignItems="flex-start">
      <div className="TimelineItem-body">
        <ListItemText
          primary={title}
          secondary={body}
        />
        <div className="TimelineItem-peopleList">
          <Avatar>H</Avatar>
          <Avatar>N</Avatar>
          <Avatar>OP</Avatar>
        </div>
        <div className="TimelineItem-chipList">
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
