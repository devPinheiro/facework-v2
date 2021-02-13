import {
    FETCH_CHATS_START,
    FETCH_CHATS_SUCCESS,
    FETCH_CHATS_FAIL,
    UPDATE_CHAT_LAST_MESSAGE
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
                data: action.payload
            }
        case FETCH_CHATS_FAIL:
            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                error: action.payload
            }

        case UPDATE_CHAT_LAST_MESSAGE:
            let chats = { ...state.data };
            for (var key in chats) {
                if (chats[key].chatId === action.payload.otherParty) {
                    return chats[key].text = action.payload.message.message
                }
            }
            return {
                ...state,
                data: chats
            }
        default:
            return state
    }
}
