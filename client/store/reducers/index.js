import auth from './auth'
import feeds from './feeds'
import chats from './chats'
import messages from './messages'
import searchedChats from './search-chats'
import post from './fetch-single-post'
import userProfile from './fetch-user-profile'
import comment from './create-comment'
import createPost from './create-post'
import job from './fetch-all-jobs'
import notifications from './notifications'
import followUser from './follow-user'
import unFollowUser from './unfollow-user'
import { reducer as flash } from 'redux-flash'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    chats,
    messages,
    searchedChats,
    flash,
    feeds,
    post,
    comment,
    job,
    userProfile,
    createPost,
    notifications,
    followUser,
    unFollowUser
})

export default rootReducer
