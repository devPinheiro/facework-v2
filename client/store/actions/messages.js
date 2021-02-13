import axios from '../Axios';
import { updateChatLastMessageRequest } from './chats'

// Fetch Messages
export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAIL = 'FETCH_MESSAGES_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const fetchMessagesStart = () => ({
  type: FETCH_MESSAGES_START
})

export const fetchMessagesSuccess = (payload, otherParty) => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: {
    otherParty: otherParty,
    data: payload
  }
})

export const fetchMessagesFail = payload => ({
  type: FETCH_MESSAGES_FAIL,
  payload
})

/**
 * Create action to fetch all messages for a chat
 * 
 * @param {Object} otherParty  page number of the response data
 * @return {Object} Redux action
 */
export const fetchMessagesRequest = (otherParty, messages) => async dispatch => {
  dispatch(fetchMessagesStart());
  let lastMessage = 0;
  let current = messages.data[otherParty];
  if (current) {
    lastMessage = current[current.length - 1].id;
  }
  return axios.get(`chats/${otherParty}/messages/${lastMessage}`, { headers: { Authorization: `Bearer ${localStorage.auth}` } })
    .then(res => {
      dispatch(fetchMessagesSuccess(res.data, otherParty));
    })
    .catch(err => {
      const {
        error
      } = err.response.data;
      let errorResponse;

      if (error) {
        errorResponse = error;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
      dispatch(fetchMessagesFail(errorResponse));
    });
};

// Send message

export const SEND_MESSAGES_START = 'SEND_MESSAGES_START'
export const SEND_MESSAGES_SUCCESS = 'SEND_MESSAGES_SUCCESS'
export const SEND_MESSAGES_FAIL = 'SEND_MESSAGES_FAIL'


/**
 * Make GET request to server to send all posts
 *
 * @return {Object} redux action
 */


export const sendMessagesStart = () => ({
  type: SEND_MESSAGES_START
})

export const sendMessagesSuccess = (message, otherParty) => ({
  type: SEND_MESSAGES_SUCCESS,
  payload: {
    otherParty: otherParty,
    data: message,
  }
})

export const sendMessagesFail = payload => ({
  type: SEND_MESSAGES_FAIL,
  payload
})

/**
 * Create action to send all messages for a chat
 * 
 * @param {string} message  page number of the response data
 * @param {string} otherParty  page number of the response data
 * @return {Object} Redux action
 */
export const sendMessagesRequest = (message, otherParty) => async dispatch => {
  dispatch(sendMessagesStart());
  return axios.post(`chats/${otherParty}/messages`,
    { message: message },
    { headers: { Authorization: `Bearer ${localStorage.auth}` } })
    .then(res => {
      dispatch(sendMessagesSuccess(res.data.data, otherParty));
      dispatch(updateChatLastMessageRequest(res.data.data, otherParty))
    })
    .catch(err => {
      const {
        error
      } = err.response.data;
      let errorResponse;

      if (error) {
        errorResponse = error;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
      dispatch(sendMessagesFail(errorResponse));
    });
};


// Append new message
export const APPEND_NEW_MESSAGES_SUCCESS = 'APPEND_NEW_MESSAGES_SUCCESS'

export const appendNewMessagesSuccess = (message, otherParty) => ({
  type: APPEND_NEW_MESSAGES_SUCCESS,
  payload: {
    otherParty: otherParty,
    data: message,
  }
})

/**
 * Create action to fetch all messages for a chat
 * 
 * @param {Object} message  page number of the response data
 * @param {string} messages  page number of the response data
 * @return {Object} Redux action
 */
export const appendNewMessagesRequest = (message, otherParty) => async dispatch => {
  dispatch(appendNewMessagesSuccess(message, otherParty));
  dispatch(updateChatLastMessageRequest(message, otherParty))
};


// Fetch more Messages
export const FETCH_MORE_MESSAGES_START = 'FETCH_MORE_MESSAGES_START'
export const FETCH_MORE_MESSAGES_SUCCESS = 'FETCH_MORE_MESSAGES_SUCCESS'
export const FETCH_MORE_MESSAGES_FAIL = 'FETCH_MORE_MESSAGES_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const fetchMoreMessagesStart = () => ({
  type: FETCH_MORE_MESSAGES_START
})

export const fetchMoreMessagesSuccess = (payload, otherParty) => ({
  type: FETCH_MORE_MESSAGES_SUCCESS,
  payload: {
    otherParty: otherParty,
    data: payload
  }
})

export const fetchMoreMessagesFail = payload => ({
  type: FETCH_MORE_MESSAGES_FAIL,
  payload
})

/**
 * Create action to fetchMore all messages for a chat
 * 
 * @param {Object} otherParty  page number of the response data
 * @return {Object} Redux action
 */
export const fetchMoreMessagesRequest = (otherParty, messages) => async dispatch => {
  dispatch(fetchMoreMessagesStart());
  let offset = messages.data[otherParty].length;
  
  try {
    let { data: response } = await axios.get(`chats/${otherParty}/messages/more/${offset}`, { 
      headers: { Authorization: `Bearer ${localStorage.auth}` } 
    });
    dispatch(fetchMoreMessagesSuccess(response, otherParty));
  } catch (err) {
    const { error } = err.response.data;
    let errorResponse;
    if (error) {
      errorResponse = error;
    } else {
      errorResponse = 'Something went wrong. please try again';
    }
    dispatch(fetchMoreMessagesFail(errorResponse));
  }
};
