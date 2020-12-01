import React from 'react'
import ReactDOM from 'react-dom'

import App from '@client/pages/Main'

/**
 * Get the container for the react application
 */
const app = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <App />,
        app
    )
}

if (app) render()

if (module.hot) module.hot.accept()
