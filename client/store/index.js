import Axios from 'axios'
import { middleware as flash } from 'redux-flash'
import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const instance = Axios.create({
    baseURL: 'https://facework.com.ng/api/'
})

const flashOptions = { timeout: 5000 }

export default createStore(
    rootReducer,

    applyMiddleware(
        flash(flashOptions),
        axiosMiddleware(instance, {
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
