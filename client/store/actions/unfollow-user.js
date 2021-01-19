import axios from  '../Axios';

// define constant

export const CREATE_UNFOLLOW_START = 'CREATE_UNFOLLOW_START'
export const CREATE_UNFOLLOW_SUCCESS = 'CREATE_UNFOLLOW_SUCCESS'
export const CREATE_UNFOLLOW_FAIL = 'CREATE_UNFOLLOW_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const createUnfollowStart = () => ({
    type: CREATE_UNFOLLOW_START
})

export const createUnfollowSuccess = payload => ({
    type: CREATE_UNFOLLOW_SUCCESS,
    payload
})

export const createUnfollowFail = payload => ({
    type: CREATE_UNFOLLOW_FAIL,
    payload
})

/**
 * Create action to fetch single post
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const createUnfollowRequest = id => async dispatch => {
    dispatch(createUnfollowStart());
    return axios.delete(`users/${id}/unfollow/`)
    .then(res => {
        dispatch(createUnfollowSuccess(res.data));
        if(res.data.message){
            dispatch(createUnfollowFail(res.data.message))
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
          dispatch(createUnfollowFail(errorResponse));
    });
};
