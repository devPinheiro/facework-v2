import {
    FETCH_CHATS_START,
    FETCH_CHATS_SUCCESS,
    FETCH_CHATS_FAIL
} from '@client/store/actions/chats'
import { chats } from '../initialState'

export default (state = chats, action) => {
    switch (action.type) {
        case FETCH_CHATS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CHATS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload,
            }
        case FETCH_CHATS_FAIL:
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
