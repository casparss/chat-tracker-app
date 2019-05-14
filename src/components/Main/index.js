import React from 'react';
import AppBar from '../AppBar'
import ChatsTimeline from '../ChatsTimeline'
import './Style.scss'

export default () =>
  <div class="MainContainer">
    <header>
      <AppBar />
    </header>
    <main>
      <ChatsTimeline />
    </main>
  </div>
