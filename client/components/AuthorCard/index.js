import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AuthorCard = props => {
    return (
        <div className="">
            <Link className="block md:flex bg-white rounded-lg py-6 my-8 max-w-content" to="/user/ye7ehe8ehe9ejd0djd0djd9djd9djd0di0i">
            <img
                className="h-12 w-12 md:h-16 md:w-16 rounded-full mx-auto md:mx-0 md:mr-4"
                src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <div className="text-center md:text-left">
                <h2 className="md:text-lg text-black">Erin Lindford</h2>
                <div className="text-purple-500 text-grey-darkest">Product Engineer</div>
                <div className="text-grey-light">erinlindford@example.com</div>
                <div className="text-grey-light">(555) 765-4321</div>
            </div>
            </Link>
        </div>
    )
}

AuthorCard.propTypes = {}

export default AuthorCard
