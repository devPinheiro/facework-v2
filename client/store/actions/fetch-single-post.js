import AxiosCall from '../Axios';
import axios from 'axios';

// define constant

export const FETCH_POST_START = 'FETCH_POST_START'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL'


/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */


export const fetchPostStart = () => ({
    type: FETCH_POST_START
})

export const fetchPostSuccess = payload => ({
    type: FETCH_POST_SUCCESS,
    payload
})

export const fetchPostFail = payload => ({
    type: FETCH_POST_FAIL,
    payload
})

/**
 * Create action to fetch single post
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const fetchPostRequest = id => async dispatch => {
    dispatch(fetchPostStart());
    return axios.get(`https://facework.com.ng/api/feeds/${id}`)
    .then(res => {
        dispatch(fetchPostSuccess(res.data));
        if(res.data.message){
            dispatch(fetchPostFail(res.data.message))
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
          dispatch(fetchPostFail(errorResponse));
    });
};
