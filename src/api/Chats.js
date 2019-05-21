import ApiClient from './ApiClient'

export default {
  fetch: () => {
    return ApiClient.fetch('chats/')
  }
}
