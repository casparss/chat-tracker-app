import React, { useEffect } from 'react'
import AppBar from '../AppBar'
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom"
import ChatsTimeline from '../ChatsTimeline'
import Profile from '../Profile'
import Nav from '../Nav'
import './Style.scss'

export default ({ hideLoadingSpinner }) => {
  useEffect(() => { hideLoadingSpinner() }, [])

  return (
    <div className="MainContainer">
      <Router>
        <main>
          <Route exact path="/" render={() => (
            <Redirect to="/chats" />
          )}/>
          <Route path="/chats" component={ChatsTimeline} />
          <Route path="/profile" component={Profile} />
        </main>
        <Nav />
      </Router>
    </div>
  )
}
