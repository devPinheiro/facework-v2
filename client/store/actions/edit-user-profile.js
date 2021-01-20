import axios from  '../Axios';

// define constant

export const EDIT_USER_PROFILE_START = 'EDIT_USER_PROFILE_START'
export const EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS'
export const EDIT_USER_PROFILE_FAIL = 'EDIT_USER_PROFILE_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const editUserProfileStart = () => ({
    type: EDIT_USER_PROFILE_START
})

export const editUserProfileSuccess = payload => ({
    type: EDIT_USER_PROFILE_SUCCESS,
    payload
})

export const editUserProfileFail = payload => ({
    type: EDIT_USER_PROFILE_FAIL,
    payload
})

/**
 * Create action to fetch single post
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const editUserProfileRequest = (data, id) => async dispatch => {
    dispatch(editUserProfileStart());
    return axios.patch(`/profile/edit/${id}`, data)
    .then(res => {
        dispatch(editUserProfileSuccess(res.data));
        if(res.data.message){
            dispatch(editUserProfileFail(res.data.message))
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
          dispatch(editUserProfileFail(errorResponse));
    });
};
