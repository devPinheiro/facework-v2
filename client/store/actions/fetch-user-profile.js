import axios from  '../Axios';

// define constant

export const FETCH_USER_PROFILE_START = 'FETCH_USER_PROFILE_START'
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS'
export const FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const fetchUserProfileStart = () => ({
    type: FETCH_USER_PROFILE_START
})

export const fetchUserProfileSuccess = payload => ({
    type: FETCH_USER_PROFILE_SUCCESS,
    payload
})

export const fetchUserProfileFail = payload => ({
    type: FETCH_USER_PROFILE_FAIL,
    payload
})

/**
 * Create action to fetch single post
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const fetchUserProfileRequest = (profile, id, token) => async dispatch => {
    dispatch(fetchUserProfileStart());
    return axios.get(profile ? `/profile/${id}` : `/auth/user`, {headers: { Authorization: `Bearer ${localStorage.auth}` }})
    .then(res => {
        dispatch(fetchUserProfileSuccess(res.data));
        if(res.data.message){
            dispatch(fetchUserProfileFail(res.data.message))
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
          dispatch(fetchUserProfileFail(errorResponse));
    });
};
