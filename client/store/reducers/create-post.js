import {
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAIL
} from '@client/store/actions/create-post'
import { createPost } from '../initialState'

export default (state = createPost, action) => {
    switch (action.type) {
        case CREATE_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case CREATE_POST_FAIL:
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
