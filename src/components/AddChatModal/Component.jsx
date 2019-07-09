import React, { Component } from 'react'
import { IonModal } from '@ionic/react'
import AddChat from '../AddChat'

export default ({ isChatModalOpen }) => (
  <IonModal isOpen={isChatModalOpen}>
    <AddChat />
  </IonModal>
)
