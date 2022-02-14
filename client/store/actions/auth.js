import axios from 'axios'
import { setAuthToken } from '../Axios'

export const SET_AUTH = 'SET_AUTH'
export const POST_LOGIN = 'POST_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const POST_REGISTER = 'POST_REGISTER'
export const POST_EMAIL_CONFIRM = 'POST_EMAIL_CONFIRM'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_RESET_PASSWORD = 'POST_RESET_PASSWORD'
export const POST_FORGOT_PASSWORD = 'POST_FORGOT_PASSWORD'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_RESEND_EMAIL_CONFIRM = 'POST_RESEND_EMAIL_CONFIRM'
export const POST_EMAIL_CONFIRM_SUCCESS = 'POST_EMAIL_CONFIRM_SUCCESS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

/**
 * Make post request to server to register a user
 *
 * @param {Object} data the user registration data from form
 * @return {Object} redux action
 */
export const postRegister = data => ({
    type: POST_REGISTER,
    payload: {
        request: {
            method: 'POST',
            url: '/auth/signup',
            data
        }
    }
})

/**
 * Create action to login a user
 *
 * @param {Object} data login credentials
 * @return {Object} Redux action
 */
export const postLogin = data => ({
    type: POST_LOGIN,
    payload: {
        request: {
            method: 'POST',
            url: '/auth/login',
            data
        }
    }
})

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
            method: 'GET',
            url: `/auth/signup/activate/${data}`
        }
    }
})

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logout = history => dispatch => {
    // remove token
    localStorage.removeItem('auth')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    history.push('/')
}
