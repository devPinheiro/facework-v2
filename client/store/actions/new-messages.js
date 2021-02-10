import axios from  '../Axios';


// define constant

export const APPEND_NEW_MESSAGES_START = 'APPEND_NEW_MESSAGES_START'
export const APPEND_NEW_MESSAGES_SUCCESS = 'APPEND_NEW_MESSAGES_SUCCESS'
export const APPEND_NEW_MESSAGES_FAIL = 'APPEND_NEW_MESSAGES_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const appendNewMessagesStart = () => ({
    type: APPEND_NEW_MESSAGES_START
})

export const appendNewMessagesSuccess = (message, messages) => ({
    type: APPEND_NEW_MESSAGES_SUCCESS,
    payload : {
      otherParty : messages.current_chat,
      data : message,
      messages : messages.data
    }
})

export const appendNewMessagesFail = payload => ({
    type: APPEND_NEW_MESSAGES_FAIL,
    payload
})

/**
 * Create action to fetch all messages for a chat
 * 
 * @param {Object} message  page number of the response data
 * @param {string} messages  page number of the response data
 * @return {Object} Redux action
 */
export const appendNewMessagesRequest = (message, messages) => async dispatch => {
  dispatch(appendNewMessagesSuccess(message, messages));
};
