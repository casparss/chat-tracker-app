import React, { Component } from 'react'
import './Style.scss'
import {
  IonToolbar,
  IonIcon,
  IonButton,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react'

export default class AddChatToolbar extends Component {
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
      <IonToolbar color="primary">
        <IonGrid>
          <IonRow>
            <IonCol size="9">
              <IonSearchbar
                animated
                debounce={1}
                onIonChange={this.updateInput}
                value={this.state.chatTitle}
                placeholder="Log a conversation…"
              ></IonSearchbar>
            </IonCol>
            <IonCol size="3">
              <IonButton
                disabled={!this.props.isFetching && this.state.chatTitle === ""}
                onClick={!this.props.isFetching ? this.createNewChat : undefined}
                shape="round"
              ><IonIcon slot="icon-only" name="star" /></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    )
  }

  createNewChat = () => {
    this.props.createNewChatAttempt({
      title: this.state.chatTitle
    })
    this.clearInput()
  }

  updateInput = (e) => {
    this.setState({ chatTitle: e.target.value })
  }

  clearInput = () => this.setState({ chatTitle: '' })
}
