import React, { useEffect } from 'react'
import AppBar from '../AppBar'
import { Route, BrowserRouter as Router } from "react-router-dom"
import ChatsTimeline from '../ChatsTimeline'
import Profile from '../Profile'
import Nav from '../Nav'
import './Style.scss'

export default ({ hideLoadingSpinner }) => {
  useEffect(() => { hideLoadingSpinner() }, [])

  return (
    <div className="MainContainer">
      <Router>
        <AppBar />
        <main>
          <Route path="/chats" component={ChatsTimeline} />
          <Route path="/profile" component={Profile} />
        </main>
        <Nav />
      </Router>
    </div>
  )
}
