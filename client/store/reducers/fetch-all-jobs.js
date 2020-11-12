import {
    FETCH_JOBS_START,
    FETCH_JOB_SUCCESS,
    FETCH_JOB_FAIL
} from '@client/store/actions/jobs'
import { jobs } from '../initialState'

export default (state = jobs, action) => {
    switch (action.type) {
        case FETCH_JOB_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                data: action.payload.data,
                nextPage: action.payload.next_page_url,
                currentPage: action.payload.current_page,
                lastPage: action.payload.last_page_url
            }
        case FETCH_JOBS_FAIL:
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
