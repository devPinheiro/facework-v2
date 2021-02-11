import axios from  '../Axios';


// define constant

export const SEARCH_CHATS_START = 'SEARCH_CHATS_START'
export const SEARCH_CHATS_SUCCESS = 'SEARCH_CHATS_SUCCESS'
export const SEARCH_CHATS_FAIL = 'SEARCH_CHATS_FAIL'


/**
 * Make GET request to server to search all posts
 *
 * @return {Object} redux action
 */


export const searchChatsStart = () => ({
    type: SEARCH_CHATS_START
})

export const searchChatsSuccess = payload => ({
    type: SEARCH_CHATS_SUCCESS,
    payload
})

export const searchChatsFail = (payload) => ({
    type: SEARCH_CHATS_FAIL,
    payload
})

/**
 * Create action to search all chats
 * @param  string search
 * @return {Object} Redux action
 */
export const searchChatsRequest = (search) => async dispatch => {
    dispatch(searchChatsStart());
    return axios.get(`chats/search/${search}`)
    .then(res => {
      let data = Array.isArray(res.data) && res.data.length ? res.data : null;
      dispatch(searchChatsSuccess(data));
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
          dispatch(searchChatsFail(errorResponse));
    });
};
