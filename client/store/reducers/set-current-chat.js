import {
    SET_CURRENT_CHAT_START,
    SET_CURRENT_CHAT_SUCCESS,
    SET_CURRENT_CHAT_FAIL
} from '@client/store/actions/set-current-chat'
import { object } from 'prop-types'
import { messages } from '../initialState'

export default (state = messages, action) => {
    switch (action.type) {
        case SET_CURRENT_CHAT_START:
            return {
                ...state,
            }
        case SET_CURRENT_CHAT_SUCCESS:
            let temp = {...state.temp};
            temp[action.payload.otherParty] = action.payload.data[action.payload.otherParty]
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                current_chat: action.payload.otherParty,
                data : temp
            }
        case SET_CURRENT_CHAT_FAIL:
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
