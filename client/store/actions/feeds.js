import axios from '../Axios'

// define constant

export const FETCH_POSTS_START = 'FETCH_POSTS_START'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL'

/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */

export const fetchPostsStart = () => ({
    type: FETCH_POSTS_START
})

export const fetchPostsSuccess = payload => ({
    type: FETCH_POSTS_SUCCESS,
    payload
})

export const fetchPostsFail = payload => ({
    type: FETCH_POSTS_FAIL,
    payload
})

/**
 * Create action to fetch all posts
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const fetchPostsRequest = (page = 1) => async dispatch => {
    dispatch(fetchPostsStart())
    return axios
        .get(`feeds?page=${page}`)
        .then(res => {
            dispatch(fetchPostsSuccess(res.data.post))
        })
        .catch(err => {
            const { error } = err.response.data
            let errorResponse

            if (error) {
                errorResponse = error
            } else {
                errorResponse = 'Something went wrong. please try again'
            }
            dispatch(fetchPostsFail(errorResponse))
        })
}
