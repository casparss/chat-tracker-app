import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom"
import ChatsTimeline from '../ChatsTimeline'
import Profile from '../Profile'
//import './Style.scss'

import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonBadge,
  IonRouterOutlet,
  IonPage
} from '@ionic/react';

export default ({ hideLoadingSpinner }) => {
  useEffect(() => { hideLoadingSpinner() }, [])
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/chats"/>}/>
      <IonPage>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(chats)" component={ChatsTimeline} exact={true} />
            <Route path="/:tab(profile)" component={Profile} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="chats" href="/chats">
              <IonLabel>Chats</IonLabel>
              <IonIcon name="md-home"></IonIcon>
              <IonBadge>6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="profile" href="/profile">
              <IonLabel>Profile</IonLabel>
              <IonIcon name="md-settings"></IonIcon>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </Router>
  )
}
