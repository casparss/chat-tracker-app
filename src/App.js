import React from 'react'
import Initialiser from './components/Initialiser'//API
import { Provider } from 'react-redux'
import { store } from './state'
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core'

const { StatusBar } = Plugins;

StatusBar.setStyle({
  style: StatusBarStyle.Dark
});

StatusBar.setBackgroundColor({
  color: '#3f50b3'
});

export default () =>
  <Provider store={store}>
    <Initialiser />
  </Provider>
