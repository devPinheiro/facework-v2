import instance from './Axios'
import { middleware as flash } from 'redux-flash'
import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'

const middleware = [thunk];
const flashOptions = { timeout: 5000 }

const persistConfig = {
    key: 'facework-v1',
    storage,
    whitelist: [
        'auth'
    ]
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(
        ...middleware,
        flash(flashOptions),
        axiosMiddleware(instance,{
            returnRejectedPromiseOnError: true
    })
    )
)

const persistor = persistStore(store);
   



export {store, persistor};
