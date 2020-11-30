import instance from './Axios'
import { middleware as flash } from 'redux-flash'
import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const middleware = [thunk];
const flashOptions = { timeout: 5000 }

export default createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(
        ...middleware,
        flash(flashOptions),
        axiosMiddleware(instance)
    )
    )
)
