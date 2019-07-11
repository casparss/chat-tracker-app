import React from 'react'
import { IonModal } from '@ionic/react'
import AddChat from '../AddChat'

export default ({ isChatModalOpen }) => (
  <IonModal isOpen={isChatModalOpen}>
    <AddChat isActive={isChatModalOpen} />
  </IonModal>
)
