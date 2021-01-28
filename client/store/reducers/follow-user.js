import {
    CREATE_FOLLOW_START,
    CREATE_FOLLOW_SUCCESS,
    CREATE_FOLLOW_FAIL
} from '@client/store/actions/follow-user'
import { followUser } from '../initialState'

export default (state = followUser, action) => {
    switch (action.type) {
        case CREATE_FOLLOW_START:
            return {
                ...state,
                isLoading: true
            }
        case CREATE_FOLLOW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case CREATE_FOLLOW_FAIL:
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
