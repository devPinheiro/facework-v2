import auth from './auth'
import feeds from './feeds'
import post from './fetch-single-post'
import { reducer as flash } from 'redux-flash'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    flash,
    feeds,
    post
})

export default rootReducer
