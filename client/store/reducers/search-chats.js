import {
    SEARCH_CHATS_START,
    SEARCH_CHATS_SUCCESS,
    SEARCH_CHATS_FAIL
} from '@client/store/actions/search-chats'
import { searchedChats } from '../initialState'

export default (state = searchedChats, action) => {
    switch (action.type) {
        case SEARCH_CHATS_START:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_CHATS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload,
            }
        case SEARCH_CHATS_FAIL:
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
