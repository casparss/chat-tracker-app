import { Plugins } from '@capacitor/core'
const { Toast } = Plugins

export default async text =>
  await Toast.show({
    text,
    duration: 2000
  })
