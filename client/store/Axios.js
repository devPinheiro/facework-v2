import axios from 'axios'

export const setAuthToken = token => {
    if (token) {
        // set token to auth
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token.replace(/['"]+/g, '')}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

const instance = axios.create({
    baseURL: 'https://facework-backend.com.ng/api',
    headers: { Authorization: `Bearer ${localStorage.getItem('auth')}` }
})

export default instance
