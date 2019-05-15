import React from 'react'
import AppBar from '../AppBar'
import ChatsTimeline from '../ChatsTimeline'
import './Style.scss'

export default () =>
  <div className="MainContainer">
    <AppBar />
    <main>
      <ChatsTimeline />
    </main>
  </div>
