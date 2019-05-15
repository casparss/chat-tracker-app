import React from 'react'
import Main from './components/Main'//API
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
    <Main />
  </Provider>
