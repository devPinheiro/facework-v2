import {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAIL,
    APPEND_NEW_MESSAGES_SUCCESS,
    SEND_MESSAGES_START,
    SEND_MESSAGES_SUCCESS,
    SEND_MESSAGES_FAIL

} from '@client/store/actions/messages'
import { messages } from '../initialState'

export default (state = messages, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_MESSAGES_SUCCESS:
            let temp = {...state.data};
            let otherParty = action.payload.otherParty;
            if (temp[otherParty] && Array.isArray(action.payload.data[otherParty])) {
                if (action.payload.data[otherParty].length) {
                    temp[otherParty].push(action.payload.data[otherParty])
                }
            } else {
                temp[otherParty] = action.payload.data[otherParty]
            }
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: otherParty,
                data : temp
            }
        case FETCH_MESSAGES_FAIL:
            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                error: action.payload
            }
        case APPEND_NEW_MESSAGES_SUCCESS:
            let holder = action.payload.messages;
            holder[action.payload.otherParty].push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: action.payload.otherParty,
                data : holder
            }
        case SEND_MESSAGES_START:
            return {
                ...state,
                isLoading: true
            }
        case SEND_MESSAGES_SUCCESS:
            let data = action.payload.messages;
            data[action.payload.otherParty].push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: action.payload.otherParty,
                data : data
            }
        case SEND_MESSAGES_FAIL:
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
