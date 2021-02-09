import axios from  '../Axios';


// define constant

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
    payload : {
      otherParty : otherParty,
      data : payload
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
export const fetchMessagesRequest = (otherParty) => async dispatch => {
    dispatch(fetchMessagesStart());
  return axios.get(`chats/${otherParty}/messages`, {headers: { Authorization: `Bearer ${localStorage.auth}` }})
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
