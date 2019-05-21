import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import moment from 'moment'
import './Style.scss'

export default ({ chatList = [], fetchChatsAttempt }) => {
  useEffect(fetchChatsAttempt, [])
  return (
    <div className="ChatsTimeline">
      <List>
        {chatList.map((props, i) => <TimelineItem key={i} {...props} />)}
      </List>
    </div>
  )
}

const DateItem = ({ date }) => (
  <div className="TimelineItem-date">
    <p>{moment(date, "YYYYMMDD").startOf('minute').fromNow()}</p>
  </div>
)

const TimelineItem = ({
    title,
    subject,
    body,
    people,
    tags,
    createdAt
  }) =>
    <ListItem className="TimelineItem" alignItems="flex-start">
      <DateItem date={createdAt} />
      <div className="TimelineItem-body">
        <ListItemText
          primary={title}
          secondary={body}
        />
        {people && <PeopleList people={people} />}
        {tags && <TagsList tags={tags} />}
      </div>
    </ListItem>

const PeopleList = ({ people }) =>
  <div className="TimelineItem-peopleList">
    {people.map((initials, i) => <Avatar key={i}>{initials}</Avatar>)}
  </div>

const TagsList = ({ tags }) =>
  <div className="TimelineItem-chipList">
    {tags.map((tagName, i) => <Chip key={i} label={tagName} onDelete={() => {}} />)}
  </div>
