import React from 'react';
import { withRouter } from 'react-router'

import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonBadge
} from '@ionic/react';

const Nav = ({ classes, location }) =>
  <IonTabs>
    <IonTab tab="home">Home Content</IonTab>
    <IonTab tab="settings">Settings Content</IonTab>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home">
        <IonLabel>Home</IonLabel>
        <IonIcon name="home"></IonIcon>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="settings">
        <IonLabel>Settings</IonLabel>
        <IonIcon name="settings"></IonIcon>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>

export default Nav;
