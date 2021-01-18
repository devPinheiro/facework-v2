import {
    EDIT_USER_PROFILE_START,
    EDIT_USER_PROFILE_SUCCESS,
    EDIT_USER_PROFILE_FAIL
} from '@client/store/actions/edit-user-profile'
import { editUserProfile } from '../initialState'

export default (state = editUserProfile, action) => {
    switch (action.type) {
        case EDIT_USER_PROFILE_START:
            return {
                ...state,
                isLoading: true
            }
        case EDIT_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case EDIT_USER_PROFILE_FAIL:
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
