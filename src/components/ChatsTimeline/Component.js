import React, { useEffect, Fragment, useState } from 'react'
import Avatar from '../Avatar'
import Chip from '../Chip'
import moment from 'moment'
import './Style.scss'
import AddChatModal from '../AddChatModal'

import {
  IonContent,
  IonSearchbar,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonIcon
} from '@ionic/react';

export default ({
  chatList = [],
  openAddChat,
  chatsFilter,
  switchFilter
}) => (
  <Fragment>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonSegment
          onIonChange={e => switchFilter(e.detail.value)}
          value={chatsFilter}
        >
          <IonSegmentButton value="all">
            All
          </IonSegmentButton>
          <IonSegmentButton value="favourites">
            Favorites
          </IonSegmentButton>
        </IonSegment>
        <IonButtons slot="end">
          <IonButton onClick={openAddChat}>
            <IonIcon size="large" name="paper-plane"></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      {/*<IonToolbar color="primary">
        <div className="SearchBarWrapper">
          <IonSearchbar
            placeholder="Log a conversation…"
          ></IonSearchbar>
        </div>
      </IonToolbar>*/}
    </IonHeader>

    <IonContent>
      <div className="ChatsTimeline">
        <AddChatModal />
        <div>
          {chatList.map((props, i) => <TimelineItem key={i} {...props} />)}
        </div>
      </div>
    </IonContent>
  </Fragment>
)

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
    <div className="TimelineItem" alignItems="flex-start">
      <DateItem date={createdAt} />
      <div className="TimelineItem-body">
        <p>{title}</p>
        <p>{body}</p>
        {people && <PeopleList people={people} />}
        {tags && <TagsList tags={tags} />}
      </div>
    </div>

const PeopleList = ({ people }) =>
  <div className="TimelineItem-peopleList">
    {people.map((initials, i) => <Avatar key={i}>{initials}</Avatar>)}
  </div>

const TagsList = ({ tags }) =>
  <div className="TimelineItem-chipList">
    {tags.map((tagName, i) => <Chip key={i} label={tagName} onDelete={() => {}} />)}
  </div>
