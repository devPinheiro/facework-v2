import axios from  '../Axios';


// define constant

export const FETCH_NOTIFICATIONS_START = 'FETCH_NOTIFICATIONS_START'
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS'
export const FETCH_NOTIFICATIONS_FAIL = 'FETCH_NOTIFICATIONS_FAIL'


/**
 * Make GET request to server to fetch all Notifications
 *
 * @return {Object} redux action
 */


export const fetchNotificationsStart = () => ({
    type: FETCH_NOTIFICATIONS_START
})

export const fetchNotificationsSuccess = payload => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload
})

export const fetchNotificationsFail = payload => ({
    type: FETCH_NOTIFICATIONS_FAIL,
    payload
})

/**
 * Create action to fetch all NOTIFICATIONS
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */
export const fetchNotificationsRequest = (page = 1 ) => async dispatch => {
    dispatch(fetchNotificationsStart());
    return axios.get(`notifications?page=${page}`)
    .then(res => {
        console.log(res.data.data);
        dispatch(fetchNotificationsSuccess(res.data.data));
    })
    .catch(err => {
      const {
            error
          } = err.response.data;
          let errorResponse;
      
          if (error) {
            errorResponse = error;
          } else {
            errorResponse = 'Something went wrong. please try again';
          }
          dispatch(fetchNotificationsFail(errorResponse));
    });
};
