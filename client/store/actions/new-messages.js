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

export const appendNewMessagesSuccess = (message, otherParty) => ({
    type: APPEND_NEW_MESSAGES_SUCCESS,
    payload : {
      otherParty : otherParty,
      data : message
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
 * @param {string} otherParty  page number of the response data
 * @return {Object} Redux action
 */
export const appendNewMessagesRequest = (message, otherParty) => async dispatch => {
  dispatch(appendNewMessagesSuccess(message, otherParty));
};
