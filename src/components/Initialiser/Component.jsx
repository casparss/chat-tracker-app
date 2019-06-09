import React, { Component } from 'react'
import Main from '../Main'
import Login from '../Login'
import Loader from '../Loader'

export default class Initialiser extends Component {
  render(isloggedIn = false) {
    return (
      <div>
        {isloggedIn ? <Main /> : <Login />}
      </div>
    )
  }

  componentDidMount() {
    this.props.appStarted()
  }
}
