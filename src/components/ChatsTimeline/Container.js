import React, { Component } from 'react'
import ChatsTimeline from './Component'
import Stubs from './Stub'

export default class Container extends Component {
  state = {
    items: Stubs
  }

  render() {
    return <ChatsTimeline items={this.state.items} />
  }
}
