import React from 'react';
import AppBar from '../AppBar'
import ConversationHistory from '../ConversationHistory'
import './Style.scss'

export default () =>
  <div class="container">
    <header>
      <AppBar />
    </header>
    <main>
      <ConversationHistory />
    </main>
  </div>
