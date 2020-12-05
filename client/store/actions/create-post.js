import axios from  '../Axios';

// define constant

export const CREATE_POST_START = 'CREATE_POST_START'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL'


/**
 * Make POST request to creat new POST
 *
 * @return {Object} redux action
 */


export const createPostStart = () => ({
    type: CREATE_POST_START
})

export const createPostSuccess = payload => ({
    type: CREATE_POST_SUCCESS,
    payload
})

export const createPostFail = payload => ({
    type: CREATE_POST_FAIL,
    payload
})

/**
 * Create action to create POST
 *
 * @param {Object} payload  payload for the request
 * @return {Object} Redux action
 */
export const createPostRequest = payload => async dispatch => {
    dispatch(createPostStart());
    return axios.post(`Posts/create`, payload)
    .then(res => {
        dispatch(createPostSuccess(res.data));
        if(res.data.message){
            dispatch(createPostFail(res.data.message))
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
          dispatch(createPostFail(errorResponse));
    });
};
