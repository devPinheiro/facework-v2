import auth from './auth'
import feeds from './feeds'
import post from './fetch-single-post'
import userProfile from './fetch-user-profile'
import comment from './create-comment'
import createPost from './create-post'
import job from './fetch-all-jobs'
import { reducer as flash } from 'redux-flash'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    flash,
    feeds,
    post,
    comment,
    job,
    userProfile,
    createPost
})

export default rootReducer
