import axios from  '../Axios';

// define constant

export const FETCH_CHATS_START = 'FETCH_CHATS_START'
export const FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS'
export const FETCH_CHATS_FAIL = 'FETCH_CHATS_FAIL'
export const UPDATE_CHAT_LAST_MESSAGE = 'UPDATE_CHAT_LAST_MESSAGE'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const fetchChatsStart = () => ({
    type: FETCH_CHATS_START
})

export const fetchChatsSuccess = payload => ({
    type: FETCH_CHATS_SUCCESS,
    payload
})

export const fetchChatsFail = payload => ({
    type: FETCH_CHATS_FAIL,
    payload
})

export const updateChatLastMessage = (message, otherParty) => ({
    type: UPDATE_CHAT_LAST_MESSAGE,
    payload: {
      message: message,
      otherParty: otherParty
    }
})

/**
 * Create action to fetch all messages for a chat
 * 
 * @param {Object} message  page number of the response data
 * @param {string} messages  page number of the response data
 * @return {Object} Redux action
 */
export const updateChatLastMessageRequest = (message, otherParty) => async dispatch => {
  dispatch(updateChatLastMessage(message, otherParty));
};

/**
 * Create action to fetch all chats
 *
 * @return {Object} Redux action
 */
export const fetchChatsRequest = () => async dispatch => {
    dispatch(fetchChatsStart());
    return axios.get('chats', {headers: { Authorization: `Bearer ${localStorage.auth}` }})
    .then(res => {
      dispatch(fetchChatsSuccess(res.data));
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
          dispatch(fetchChatsFail(errorResponse));
    });
};
