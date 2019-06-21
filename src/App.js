import React from 'react'
import Initialiser from './components/Initialiser'//API
import { Provider } from 'react-redux'
import { store } from './state'
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core'
import { IonApp } from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const { StatusBar } = Plugins;

StatusBar.setStyle({
  style: StatusBarStyle.Dark
});

StatusBar.setBackgroundColor({
  color: '#3f50b3'
});

export default () =>
  <Provider store={store}>
    <IonApp>
      <Initialiser />
    </IonApp>
  </Provider>
