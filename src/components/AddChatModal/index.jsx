import React, { Component } from 'react'
import { IonContent, IonModal, IonButton } from '@ionic/react'
import AddChatToolbar from '../AddChatToolbar'

type Props = {}
type State = {
  showModal: boolean
}

export default class AddChatModal extends Component<Props, State> {
  state = {
    isOpen: false
  }

  constructor() {
    super()
    this.addChatToolbar = React.createRef()
  }

  componentWillReceiveProps({ isOpen }) {
    if(this.state.isOpen !== isOpen && isOpen) this.open()
  }

  open = () => {
    this.setState({ isOpen: true }, () => {
      setTimeout(() => {
        this.addChatToolbar.current
        .querySelector('ion-searchbar')
        .setFocus()

      }, 100)
    })
  }

  close = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <IonModal
        isOpen={this.state.isOpen}
        onDidDismiss={this.props.onDidDismiss}
      >
        <div ref={this.addChatToolbar}><AddChatToolbar></AddChatToolbar></div>
        <IonContent>
          <IonButton block onClick={this.close}>
            Close Modal
          </IonButton>
        </IonContent>
      </IonModal>
    )
  }
}
