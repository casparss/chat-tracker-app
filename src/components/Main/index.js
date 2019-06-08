import React from 'react'
import AppBar from '../AppBar'
import { Route, BrowserRouter as Router } from "react-router-dom"
import ChatsTimeline from '../ChatsTimeline'
import Login from '../Login'
import Nav from '../Nav'
import './Style.scss'

const Users = () => <h1>Users</h1>
const Twats = () => <h1>Twats</h1>

export default () =>
  <div className="MainContainer">
    <Router>
      <AppBar />
      <main>
        <Route path="/chats" component={ChatsTimeline} />
        <Route path="/login" component={Users} />
      </main>
      <Nav />
    </Router>
  </div>
