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
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data : function (action) {
                    if (data.indexOf(action.payload.otherParty) !== -1) {
                        data.splice(index, 1)
                    }
                    return data[action.payload.otherParty] = action.payload.data.otherParty;
                }
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
