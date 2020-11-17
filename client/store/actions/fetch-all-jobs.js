import AxiosCall from '../Axios';
import axios from 'axios';

// define constant

export const FETCH_JOBS_START = 'FETCH_JOBS_START'
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'
export const FETCH_JOBS_FAIL = 'FETCH_JOBS_FAIL'


/**
 * Make GET request to server to fetch all JOBS
 *
 * @return {Object} redux action
 */


export const fetchJobsStart = () => ({
    type: FETCH_JOBS_START
})

export const fetchJobsSuccess = payload => ({
    type: FETCH_JOBS_SUCCESS,
    payload
})

export const fetchJobsFail = payload => ({
    type: FETCH_JOBS_FAIL,
    payload
})

/**
 * Create action to fetch all Jobs
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const fetchJobsRequest = (page = 1 ) => async dispatch => {
    dispatch(fetchJobsStart());
    return axios.get(`https://facework.com.ng/api/jobs?page=${page}`)
    .then(res => {
        dispatch(fetchJobsSuccess(res.data.post));
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
          dispatch(fetchJobsFail(errorResponse));
    });
};
