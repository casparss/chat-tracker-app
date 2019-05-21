import { merge } from 'lodash'
import { store } from '../state'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const baseUrl = 'http://localhost:3001/api'

export default class ApiClient {
  static async fetch(url, opts = {}) {
    const mergeOpts = merge(
      {},
      this.headers(),
      opts
    )

    return fetch(`${baseUrl}/${url}`, mergeOpts)
      .then(response => {
        console.log('Http request', response)
        return response
      })
      .then(response => response.json())
  }

  static post(url, body, opts = {}) {
    try {
      return this.fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        ...opts,
      })
    }
    catch(e) {
      console.error(e)
    }
  }

  static put(url, opts = {}) {
    return this.fetch(url, {
      ...opts,
      method: 'PUT'
    })
  }

  static delete(url, opts = {}) {
    return this.fetch(url, {
      ...opts,
      method: 'DELETE'
    })
  }

  static token() {
    return store.getState().user.token
  }

  static headers() {
    return {
      headers: {
        ...defaultHeaders,
        'Authorization': `Bearer ${this.token()}`
      }
    }
  }
}
