import React, { component, Fragment } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonBadge,
  IonRouterOutlet,
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';

const style = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column'
}

export default ({ logout }) => (
  <Fragment>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div style={style}>
        <Button onClick={logout} variant="contained" color="secondary">
          Signout
          <DeleteIcon />
        </Button>
      </div>
    </IonContent>
  </Fragment>
)
