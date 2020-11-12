import Axios from 'axios'
import { middleware as flash } from 'redux-flash'
import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from './reducers'

console.log(process.env.NODE_ENV, process.env.DEVELOPMENT_URL, process.env.PRODUCTION_URL);
const middleware = [thunk];
const flashOptions = { timeout: 5000 }

export default createStore(
    rootReducer,
    applyMiddleware(
        ...middleware,
        flash(flashOptions),
        axiosMiddleware({
            returnRejectedPromiseOnError: true,
            interceptors: {
                request: [
                    {
                        success: ({ getState }, axiosConfig) => {
                            const { token } = getState().auth
                            if (token) {
                                axiosConfig.headers = {
                                    access_token: `${token}`
                                }
                            }
                            return axiosConfig
                        }
                    }
                ]
            }
        })
    )
)
