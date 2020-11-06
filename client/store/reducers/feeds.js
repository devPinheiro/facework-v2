import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL
} from '@client/store/actions/feeds'
import { feeds } from '../initialState'

export default (state = feeds, action) => {
    switch (action.type) {
        case FETCH_POSTS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload.data,
                nextPage: action.payload.next_page_url,
                currentPage: action.payload.current_page,
                lastPage: action.payload.last_page_url
            }
        case FETCH_POSTS_FAIL:
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
