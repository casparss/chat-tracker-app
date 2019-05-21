import { merge } from 'lodash'
import { store } from '../state'

const defaultOpts = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const baseUrl = 'http://localhost:3001/api'

export default class ApiClient {
  static async fetch(url, opts) {
    const mergeOpts = merge(
      {},
      defaultOpts,
      this.authHeader(),
      opts
    )

    return fetch(`${baseUrl}/${url}`, mergeOpts)
      .then(response => {
        console.log('Http request', response)
        return response
      })
      .then(response => response.json())
  }

  static authHeader() {
    return {
      headers: {
        'Authorization': `Bearer ${this.token()}`
      }
    }
  }

  static token() {
    return store.getState().user.token
  }
}
