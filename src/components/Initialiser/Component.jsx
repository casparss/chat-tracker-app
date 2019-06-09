import React, { Component } from 'react'
import Main from '../Main'
import Login from '../Login'
import Loader from '../Loader'

export default class Initialiser extends Component {
  render() {
    const { isloggedIn, isLoading } = this.props
    return (
      <div>
        {isLoading && <Loader />}
        {isloggedIn ? <Main /> : <Login />}
      </div>
    )
  }

  componentDidMount() {
    this.props.appStarted()
  }
}
