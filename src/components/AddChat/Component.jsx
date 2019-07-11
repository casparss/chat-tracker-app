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

  componentDidUpdate(prevProps){
    if(prevProps.isActive === false && this.props.isActive === true) {
      setTimeout(() => this.setFocus(), 100)
    }
  }

  setFocus() {
    this.searchbarWrapper && this.searchbarWrapper.blur()
    this.searchbarWrapper && this.searchbarWrapper.setFocus()
  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonSearchbar
              ref={(ref) => { this.searchbarWrapper = ref }}
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
