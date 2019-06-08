import React, { Component } from 'react'
import Main from '../Main'

export default class Initialiser extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }

  componentDidMount() {
    this.props.appStarted()
  }
}
