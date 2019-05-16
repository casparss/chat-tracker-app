import { createReducer } from 'reduxsauce'
import { Types } from './Types'
import moment from 'moment'

export const initialFetchState = {
  isFetching: false,
  isFetchSuccess: null
}

export const initialState = {
  ...initialFetchState,
  chatList: [{
      id: 0,
      title: 'Another note',
      subject: 'Something',
      body: 'Hello there I am some text, Hello there I am some text',
      people: ['H', 'CS', 'BR'],
      date: moment().subtract(30, 'minutes')
    },
    {
      id: 1,
      title: 'Hello there',
      subject: 'subject',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta ipsum nisi. Phasellus mi erat, molestie id risus quis, dapibus elementum neque. Praesent id condimentum dui.',
      people: ['BR'],
      tags: ['Brexit', 'News', 'Whatever'],
      date: moment().subtract(50, 'minutes')
    },
    {
      id: 2,
      title: 'Bla bla bla',
      subject: 'Qwerty',
      body: 'Hello there I am some text, Hello there I am some text',
      people: ['JS'],
      tags: ['Amsterdam'],
      date: moment().subtract(3, 'day')
    },
    {
      id: 3,
      title: 'Vibes on the canals',
      subject: 'Something',
      body: 'Hello there I am some text, Hello there I am some text',
      tags: ['Brexit', 'News', 'Whatever', 'Lorem', 'Ipsum', 'People'],
      date: moment().subtract(4, 'day')
      },
    {
      id: 4,
      title: 'The weather',
      subject: 'Not necessary',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta ipsum nisi. Phasellus mi erat, molestie id risus quis, dapibus elementum neque. Praesent id condimentum dui. Suspendisse auctor ante at consequat aliquet. Vivamus porta condimentum est in interdum. Phasellus feugiat gravida interdum. Aenean mi orci, vestibulum eu ultrices nec, placerat sit amet neque. Fusce volutpat urna at ipsum egestas pellentesque. Aenean tempus sodales ornare.',
      people: ['GO'],
      tags: ['one'],
      date: moment().subtract(20, 'day')
    },
    {
      id: 5,
      title: 'Bla bla bla',
      subject: 'Qwerty',
      body: 'interdum. Aenean mi orci, vestibulum eu ultrices nec, placerat sit amet neque. Fusce volutpat urna at ipsum egestas pellentesque. Aenean tempus sodales ornare.',
      people: ['PL'],
      date: moment().subtract(25, 'day')
    }
  ]
}

const newChatItem = title => ({
  id: null,
  title,
  subject: '',
  body: '',
  people: [],
  date: moment()
})

export const Handlers = {
  [Types.CREATE_NEW_CHAT_ATTEMPT]: (state, { title }) => ({
    ...state,
    chatList: [newChatItem(title), ...state.chatList],
    isFetching: true
  }),
  [Types.CREATE_NEW_CHAT_FAILED]: (state, payload) => ({
    ...state,
    isFetching: false
  }),
  [Types.CREATE_NEW_CHAT_SUCCESS]: (state, { title }) => ({
    ...state,
    chatList: [newChatItem(title), ...state.chatList],
    isFetching: false,
    isFetchSuccess: true
  }),
  [Types.RESET_UI]: state => ({
    ...state,
    ...initialFetchState
  })
}

export const reducer = createReducer(initialState, Handlers)
