import React from 'react';
import Item from './Item'
import List from '@material-ui/core/List';
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
  <div class="conversation-history-container">
    <List>{stub.map((props) => <Item {...props} />)}</List>
  </div>
