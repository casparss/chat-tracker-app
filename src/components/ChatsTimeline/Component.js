import React, { useEffect, Fragment, useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import moment from 'moment'
import './Style.scss'
import {ModalExample} from '../Modal'

import {
  IonContent,
  IonSearchbar,
  IonHeader,
  IonToolbar
} from '@ionic/react';

export default ({ chatList = [] }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <Fragment>
      <IonHeader>
        <IonToolbar color="primary">
          <IonSearchbar
            onIonFocus={(e) => {
              console.log(e)
              setModalOpen(true)
            }}
            placeholder="Log a conversation…"
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="ChatsTimeline">
          <ModalExample
            isOpen={isModalOpen}
            onDidDismiss={() => { setModalOpen(false) }}
          />
          <List>
            {chatList.map((props, i) => <TimelineItem key={i} {...props} />)}
          </List>
        </div>
      </IonContent>
    </Fragment>
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
