import auth from './auth'
import feeds from './feeds'
import { reducer as flash } from 'redux-flash'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    flash,
    feeds
})

export default rootReducer
