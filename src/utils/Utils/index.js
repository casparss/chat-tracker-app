import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export const set = async (key, value) => {
  return await Storage.set({ key, value });
}

export const get = async key => {
  return await Storage.get({ key });
}
