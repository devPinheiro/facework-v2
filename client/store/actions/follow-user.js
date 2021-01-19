import axios from  '../Axios';

// define constant

export const CREATE_FOLLOW_START = 'CREATE_FOLLOW_START'
export const CREATE_FOLLOW_SUCCESS = 'CREATE_FOLLOW_SUCCESS'
export const CREATE_FOLLOW_FAIL = 'CREATE_FOLLOW_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const createFollowStart = () => ({
    type: CREATE_FOLLOW_START
})

export const createFollowSuccess = payload => ({
    type: CREATE_FOLLOW_SUCCESS,
    payload
})

export const createFollowFail = payload => ({
    type: CREATE_FOLLOW_FAIL,
    payload
})

/**
 * Create action to fetch single post
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const createFollowRequest = id => async dispatch => {
    dispatch(createFollowStart());
    return axios.post(`users/${id}/follow/`)
    .then(res => {
        dispatch(createFollowSuccess(res.data));
        if(res.data.message){
            dispatch(createFollowFail(res.data.message))
        }
    })
    .catch(err => {
      const {
            message
          } = err.response.data;
          let errorResponse;
       
          if (message) {
            errorResponse = message;
          } else {
            errorResponse = 'Something went wrong. please try again';
          }
          dispatch(createFollowFail(errorResponse));
    });
};
