import React from 'react'

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel
} from '@ionic/react';

export default ({ logout }) => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonItem button  onClick={logout}>
        <IonLabel>Sign out</IonLabel>
      </IonItem>
    </IonContent>
  </>
)
