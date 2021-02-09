import {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAIL
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
            let temp = {...state.temp};
            temp[action.payload.otherParty] = action.payload.data[action.payload.otherParty]
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: action.payload.otherParty,
                data : temp
            }
        case FETCH_MESSAGES_FAIL:
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
