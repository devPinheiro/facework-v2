
import React, { PureComponent } from 'react'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Main from '@pages/AppRouter'


// css
import '@client/styles/main.css'


// actions
import { setAuthToken } from '../../store/Axios'
import { setCurrentUser , logout} from '../../store/actions/auth'
import store from '../../store'
import { fetchUserProfileRequest } from '../../store/actions/fetch-user-profile'



export class App extends PureComponent {

    componentDidMount(){

        if (localStorage.auth) {
   
            // set auth token
            setAuthToken(localStorage.auth);
            //decode
            const decoded = jwt_decode(localStorage.auth);
            console.log('this is decoded', decoded);
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
              <Main />
            </Router>     
        )
    }
}

export default App;
