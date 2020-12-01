import {
    FETCH_USER_PROFILE_START,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAIL
} from '@client/store/actions/fetch-user-profile'
import { userProfile } from '../initialState'

export default (state = userProfile, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case FETCH_USER_PROFILE_FAIL:
            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                error: action.payload
            }
        default:
            return state
    }
}
