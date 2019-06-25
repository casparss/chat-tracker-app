import React, { Component } from 'react'
import { IonContent, IonModal, IonButton } from '@ionic/react'
import AddChatToolbar from './AddChatToolbar'

type Props = {}
type State = {
  showModal: boolean
}

export class ModalExample extends Component<Props, State> {
  state = {
    isOpen: false
  }

  componentWillReceiveProps({ isOpen }) {
    this.setState({ isOpen })
  }

  open = () => {
    this.setState({ isOpen: true })
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
      <AddChatToolbar ref={this.searchbar}></AddChatToolbar>
        <IonContent>
          <IonButton onClick={this.close}>
            Close Modal
          </IonButton>
        </IonContent>
      </IonModal>
    );
  }
}
