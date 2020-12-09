import {
    AUTH_LOGOUT,
    POST_LOGIN_SUCCESS,
    POST_REGISTER_SUCCESS,
    POST_EMAIL_CONFIRM_SUCCESS,
    SET_CURRENT_USER
} from '@client/store/actions/auth'
import { isEmpty } from '../../validation-schemas'
import { auth } from '../initialState'


export default (state = auth, action) => {
    switch (action.type) {
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.data.data,
                // token: action.payload.data.access_token
            }
        case POST_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.data.user,
            }
        case AUTH_LOGOUT:
            return {
                user: null,
                token: null
            }
        case POST_EMAIL_CONFIRM_SUCCESS:
            return {
                ...state,
                user: action.payload.data.data,
                token: action.payload.data.access_token
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state
    }
}
