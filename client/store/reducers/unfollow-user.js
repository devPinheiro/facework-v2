import {
    CREATE_UNFOLLOW_START,
    CREATE_UNFOLLOW_SUCCESS,
    CREATE_UNFOLLOW_FAIL
} from '@client/store/actions/unfollow-user'
import { unFollowUser } from '../initialState'

export default (state = unFollowUser, action) => {
    switch (action.type) {
        case CREATE_UNFOLLOW_START:
            return {
                ...state,
                isLoading: true
            }
        case CREATE_UNFOLLOW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case CREATE_UNFOLLOW_FAIL:
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
