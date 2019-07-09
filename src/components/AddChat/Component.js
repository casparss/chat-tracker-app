import React, { Component } from 'react'
import './Style.scss'
import {
  IonToolbar,
  IonHeader,
  IonContent,
  IonSearchbar,
  IonButton
} from '@ionic/react'

export default class AddChat extends Component {
  state = {
    chatTitle: ''
  }

  constructor() {
    super()
    this.searchbarWrapper = React.createRef()
  }

  setFocus() {
    this.searchbarWrapper.current.setFocus()
  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonSearchbar
              animated
              debounce={1}
              onIonChange={this.updateInput}
              value={this.state.chatTitle}
              placeholder="Log a conversation…"
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton expand="block" onClick={this.createNewChat}>
            Create new chat
          </IonButton>
        </IonContent>
      </>
    )
  }

  createNewChat = () => {
    this.props.createNewChatAttempt({ title: this.state.chatTitle })
    this.clearInput()
  }

  updateInput = (e) => {
    this.setState({ chatTitle: e.target.value })
  }

  clearInput = () => this.setState({ chatTitle: '' })
}
