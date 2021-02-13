import {
    FETCH_NOTIFICATIONS_START,
    FETCH_NOTIFICATIONS_SUCCESS,
    FETCH_NOTIFICATIONS_FAIL,
    APPEND_NEW_NOTIFICATIONS_START,
    APPEND_NEW_NOTIFICATIONS_SUCCESS,
    APPEND_NEW_NOTIFICATIONS_FAIL
} from '@client/store/actions/notification'
import { notifications } from '../initialState'

export default (state = notifications, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload.data,
                nextPage: action.payload.next_page_url,
                currentPage: action.payload.current_page,
                lastPage: action.payload.last_page_url
            }
        case FETCH_NOTIFICATIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                isSuccessful: false,
                error: action.payload
            }
        case APPEND_NEW_NOTIFICATIONS_START:
            return {
                ...state,
                isLoading: true
            }
        case APPEND_NEW_NOTIFICATIONS_SUCCESS:
            let temp = action.payload.notifications;
            if (Array.isArray(action.payload.data) && action.payload.data.length) {
                temp.push(action.payload.data);
            }
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data : temp
            }
        case APPEND_NEW_NOTIFICATIONS_FAIL:
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
