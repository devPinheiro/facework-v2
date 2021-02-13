import {
    APPEND_NEW_MESSAGES_START,
    APPEND_NEW_MESSAGES_SUCCESS,
    APPEND_NEW_MESSAGES_FAIL
} from '@client/store/actions/new-messages'
import { messages } from '../initialState'

export default (state = messages, action) => {
    switch (action.type) {
        case APPEND_NEW_MESSAGES_START:
            return {
                ...state,
                isLoading: true
            }
        case APPEND_NEW_MESSAGES_SUCCESS:
            let temp = action.payload.messages;
            temp[action.payload.otherParty].push(action.payload.message);
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: action.payload.otherParty,
                data : temp
            }
        case APPEND_NEW_MESSAGES_FAIL:
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
