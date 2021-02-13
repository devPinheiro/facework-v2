import {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAIL,
    APPEND_NEW_MESSAGES_SUCCESS,
    SEND_MESSAGES_START,
    SEND_MESSAGES_SUCCESS,
    SEND_MESSAGES_FAIL,
    FETCH_MORE_MESSAGES_START,
    FETCH_MORE_MESSAGES_SUCCESS,
    FETCH_MORE_MESSAGES_FAIL

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
            let messages = action.payload.data[otherParty];
            let more = {...state.current_load_more}; 
            if (temp[otherParty] && Array.isArray(messages)) {
                if (messages.length) {
                    temp[otherParty].push(...messages)
                }
            } else {
                temp[otherParty] = messages
            }
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: otherParty,
                interlocutor: action.payload.data.interlocutor,
                current_load_more : action.payload.data.last_message ? action.payload.data.pagination.more : more -  (messages.length),
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
            let holder = {...state.data};
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
            let data = {...state.data};
            data[action.payload.otherParty].push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data : data
            }
        case SEND_MESSAGES_FAIL:
            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                error: action.payload
            }
        case FETCH_MORE_MESSAGES_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_MORE_MESSAGES_SUCCESS:
            let more_messages = {...state.data};
            if (Array.isArray(action.payload.data[action.payload.otherParty])) {
                if (action.payload.data[action.payload.otherParty].length) {
                    more_messages[action.payload.otherParty].unshift(...action.payload.data[action.payload.otherParty])
                }
            }
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_load_more : action.payload.data.pagination.more,
                data : more_messages
            }
        case FETCH_MORE_MESSAGES_FAIL:
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
