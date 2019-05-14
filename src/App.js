import Main from './components/Main'//API
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

export default Main
