import {
    CREATE_COMMENT_START,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL
} from '@client/store/actions/create-comment'
import { comment } from '../initialState'

export default (state = comment, action) => {
    switch (action.type) {
        case CREATE_COMMENT_START:
            return {
                ...state,
                isLoading: true
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case CREATE_COMMENT_FAIL:
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
