import axios from  '../Axios';

// define constant

export const CREATE_POST_START = 'CREATE_POST_START'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL'


/**
 * Make POST request to creat new POST
 *
 * @return {Object} redux action
 */


export const createPostStart = () => ({
    type: CREATE_POST_START
})

export const createPostSuccess = payload => ({
    type: CREATE_POST_SUCCESS,
    payload
})

export const createPostFail = payload => ({
    type: CREATE_POST_FAIL,
    payload
})

/**
 * Create action to create POST
 *
 * @param {Object} payload  payload for the request
 * @return {Object} Redux action
 */



export const createPostRequest = payload => {

const form = new FormData();

Object.entries(payload).forEach(([key, value]) => {
    form.append(key, value);
});

return  {
  type: CREATE_POST_SUCCESS,
    payload: {
        request: {
            method: 'POST',
            url: '/feeds/create',
            data: form
        }
    }
}
}
