import {
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL
} from '@client/store/actions/fetch-single-post'
import { post } from '../initialState'

export default (state = post, action) => {
    switch (action.type) {
        case FETCH_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload
            }
        case FETCH_POST_FAIL:
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
