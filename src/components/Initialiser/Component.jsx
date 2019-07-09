import React, { Component, Fragment } from 'react'
import Main from '../Main'
import Login from '../Login'
import Loader from '../Loader'

export default class Initialiser extends Component {
  render() {
    const { isloggedIn, isLoading } = this.props
    return (
      <Fragment>
        {isLoading && <Loader />}
        {isloggedIn ? <Main /> : <Login />}
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.appStarted()
  }
}
