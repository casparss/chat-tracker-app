import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import './Style.scss'

const stub = [{
    id: 0,
    title: 'Another note',
    subject: 'Something',
    body: 'Hello there I am some text, Hello there I am some text',
    people: 'Bob, James'
  },
  {
    id: 1,
    title: 'Hello there',
    subject: 'subject',
    body: 'Something about something else',
    people: 'Alex'
  },
  {
    id: 2,
    title: 'Bla bla bla',
    subject: 'Qwerty',
    body: 'Hello there I am some text, Hello there I am some text',
    people: 'Jane'
  }
]

export default () =>
  <div className="ChatsTimeline">
    <List>
      {stub.map((props) => <TimelineItem {...props} />)}
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
