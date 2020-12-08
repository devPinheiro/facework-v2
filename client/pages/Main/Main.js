
import React, { PureComponent } from 'react'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

// components
import Main from '@pages/AppRouter'


// css
import '@client/styles/main.css'


// actions
import { setAuthToken } from '../../store/Axios'
import { setCurrentUser , logout} from '../../store/actions/auth'
import { store, persistor } from '../../store'
import { fetchUserProfileRequest } from '../../store/actions/fetch-user-profile'
import { Provider } from 'react-redux'



export class App extends PureComponent {

    componentDidMount(){

        if (localStorage.auth) {
   
            // set auth token
            setAuthToken(localStorage.auth);
            //decode
            const decoded = jwt_decode(localStorage.auth);
            
            // set current user
            store.dispatch(setCurrentUser(decoded));
          
            store.dispatch(fetchUserProfileRequest(decoded.aud));
            // for expired token
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
              // logout current user
              store.dispatch(logout());
              window.location.href = "/";
            }
          }
        
    }


    /**
     * Render the Main component
     *
     * @return {JSX}
     */
    render() {
        return (
            <Router>
                <Provider store={store} >
                    <PersistGate loading={null} persistor={persistor}>
                        <Main />
                    </PersistGate>
                </Provider>
            </Router>     
        )
    }
}

export default App;
