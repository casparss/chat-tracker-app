import React from 'react'
import AppBar from '../AppBar'
import ChatsTimeline from '../ChatsTimeline'
import Nav from '../Nav'
import './Style.scss'

export default () =>
  <div className="MainContainer">
    <AppBar />
    <main>
      <ChatsTimeline />
    </main>
    <Nav />
  </div>
