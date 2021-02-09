import axios from  '../Axios';


// define constant

export const FETCH_CHATS_START = 'FETCH_CHATS_START'
export const FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS'
export const FETCH_CHATS_FAIL = 'FETCH_CHATS_FAIL'


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
