import axios from  '../Axios';

// define constant

export const CREATE_COMMENT_START = 'CREATE_COMMENT_START'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL'


/**
 * Make POST request to creat new comment
 *
 * @return {Object} redux action
 */


export const createCommentStart = () => ({
    type: CREATE_COMMENT_START
})

export const createCommentSuccess = payload => ({
    type: CREATE_COMMENT_SUCCESS,
    payload
})

export const createCommentFail = payload => ({
    type: CREATE_COMMENT_FAIL,
    payload
})

/**
 * Create action to create comment
 *
 * @param {Object} payload  payload for the request
 * @return {Object} Redux action
 */
// export const createCommentRequest = payload => async dispatch => {
//     dispatch(createCommentStart());
//     return axios.post(`comments/create`, payload)
//     .then(res => {
//         dispatch(createCommentSuccess(res.data));
//         if(res.data.message){
//             dispatch(createCommentFail(res.data.message))
//         }
//     })
//     .catch(err => {
//       const {
//             message
//           } = err.response.data;
//           let errorResponse;
       
//           if (message) {
//             errorResponse = message;
//           } else {
//             errorResponse = 'Something went wrong. please try again';
//           }
//           dispatch(createCommentFail(errorResponse));
//     });
// };

export const createCommentRequest = payload => {
  
  return  {
    type: CREATE_COMMENT_SUCCESS,
      payload: {
          request: {
              method: 'POST',
              url: '/comments/create',
              data: payload
          }
      }
  }
  }
