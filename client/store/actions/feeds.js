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

export const fetchPostsSuccess = () => ({
    type: FETCH_POSTS_SUCCESS,
    payload
})

export const fetchPostsFail = () => ({
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
export const fetchPostsRequest = (page, perPage) => ({
   
});

/**
 * Make post request to request a password reset
 *
 * @param {Object} data
 * @return {Object} redux action object
 */
export const postForgotPassword = data => ({
    type: POST_FORGOT_PASSWORD,
    payload: {
        request: {
            method: 'POST',
            url: '/password/create',
            data
        }
    }
})

/**
 * Make post request to reset user password
 *
 * @param {Object} data
 * @return {Object} redux action object
 */
export const postResetPassword = data => ({
    type: POST_RESET_PASSWORD,
    payload: {
        request: {
            method: 'POST',
            url: '/password/reset',
            data
        }
    }
})

/**
 * Confirm user email address
 *
 * @param {Object} data
 * @return {Object} redux action object
 */
export const postEmailConfirm = data => ({
    type: POST_EMAIL_CONFIRM,
    payload: {
        request: {
            method: 'POST',
            url: `auth/signup/activate/${data}`,
            
        }
    }
})

/**
 * Resend email confirmation email to user.
 *
 * @param {Object} data
 * @return {Object} redux action object
 */
export const postResendEmailConfirm = () => ({
    type: POST_RESEND_EMAIL_CONFIRM,
    payload: {
        request: {
            method: 'POST',
            url: 'auth/emails/confirm/resend'
        }
    }
})

/**
 * Set the auth data for a user
 *
 * @param {Object} data the user data from server
 * @return {Object} action sent to redux store
 */
export const authLogout = data => ({
    type: AUTH_LOGOUT,
    payload: data
})
