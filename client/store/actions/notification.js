import axios from '../Axios';


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
export const fetchNotificationsRequest = (page = 1) => async dispatch => {
  dispatch(fetchNotificationsStart());
  return axios.get(`notifications?page=${page}`, {
    headers:
      { Authorization: `Bearer ${localStorage.auth}` }
  })
    .then(res => {
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


export const APPEND_NEW_NOTIFICATIONS_START = 'APPEND_NEW_NOTIFICATIONS_START'
export const APPEND_NEW_NOTIFICATIONS_SUCCESS = 'APPEND_NEW_NOTIFICATIONS_SUCCESS'
export const APPEND_NEW_NOTIFICATIONS_FAIL = 'APPEND_NEW_NOTIFICATIONS_FAIL'

/**
 * Make GET request to server to fetch all Notifications
 *
 * @return {Object} redux action
 */

export const appendNewNotificationsStart = () => ({
  type: APPEND_NEW_NOTIFICATIONS_START
})

export const appendNewNotificationsFail = payload => ({
  type: APPEND_NEW_NOTIFICATIONS_FAIL,
  payload
})

export const appendNewNotificationsSuccess = (notifications, data) => ({
    type: APPEND_NEW_NOTIFICATIONS_SUCCESS,
    payload : {
      notifications : notifications.data,
      data : data
    }
})


/**
 * Create action to fetch all Notifications
 * 
 * @param {Object} notification  page number of the response data
 * @param {string} notifications  page number of the response data
 * @return {Object} Redux action
 */
export const appendNewNotificationsRequest = (notifications) => async dispatch => {
  let lastNofications = null;
  if (notifications.data && notifications.data.length) {
    lastNofications = notifications.data[current[0]].created_at;
  }
  return axios.get(`notifications/${lastNofications}`, {
    headers:
      { Authorization: `Bearer ${localStorage.auth}` }
  })
    .then(res => {
      dispatch(appendNewNotificationsSuccess(notifications, res.data.data));
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
  dispatch(appendNewNotificationsSuccess(notifications));
};
