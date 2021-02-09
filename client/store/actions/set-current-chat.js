import axios from  '../Axios';


// define constant

export const SET_CURRENT_CHAT_START = 'SET_CURRENT_CHAT_START'
export const SET_CURRENT_CHAT_SUCCESS = 'SET_CURRENT_CHAT_SUCCESS'
export const SET_CURRENT_CHAT_FAIL = 'SET_CURRENT_CHAT_FAIL'


/**
 * Make GET request to server to set all posts
 *
 * @return {Object} redux action
 */


export const setCurrentChatStart = () => ({
    type: SET_CURRENT_CHAT_START
})

export const setCurrentChatSuccess = (data, otherParty) => ({
    type: SET_CURRENT_CHAT_SUCCESS,
    payload: {
      otherParty : otherParty,
      data : data,
    }
})

export const setCurrentChatFail = payload => ({
    type: SET_CURRENT_CHAT_FAIL,
    payload
})

/**
 * Create action to set all chats
 *
 * @param {Object} otherParty  page number of the response data
 * @return {Object} Redux action
 */
export const setCurrentChatRequest = (otherParty) => async dispatch => {
    dispatch(setCurrentChatStart());
    return axios.get(`chats/${otherParty}/messages`, {headers: { Authorization: `Bearer ${localStorage.auth}` }})
    .then(res => {
      dispatch(setCurrentChatSuccess(res.data, otherParty));
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
          dispatch(setCurrentChatFail(errorResponse));
    });
};
