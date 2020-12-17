import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FiMapPin
} from 'react-icons/fi'

const AuthorCard = ({ profile, name, email, id, image }) => {

    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    const imageVariants = {
        exit: {
            y: '50%',
            opacity: 0.5,
            transition: { delay: 1, ...transition }
        },
        enter: {
            y: '0%',
            opacity: 1,
            transition
        }
    }

    return (
        <>
        { profile ?  (<div className="flex flex-col items-center">
        <motion.img
            className="h-16 w-16 md:h-32 md:w-32 mt-3 rounded-full  border-grey-lightest border"
            variants={imageVariants}
            src={ image ? image : `https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80`}
            alt="Sammy Dev"
        />
        <div className="py-2 text-center">
            <h2 className="md:text-lg text-black text-sm py-1">
                {name}
            </h2>
            <div className="text-purple-500 text-grey-darkest py-2 text-xs">
                {profile.service}
            </div>
            <div className="text-purple-500 text-grey-darkest text-xs">
                <FiMapPin /> {profile.location}
            </div>
        </div>
    </div>) :
        (<div className="">
            <Link className="block md:flex bg-white rounded-lg py-6 my-8 max-w-content" to={`/profile`}>
            <motion.img
            className="h-10 w-10 md:h-16 md:w-16 mt-3 mr-4 rounded-full border-grey-lightest border"
            variants={imageVariants}
            src={ image ? image : `https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80`}
            alt="Sammy Dev"
        />
            <div className="text-center md:text-left mt-2">
                <h2 className="md:text-lg text-black pb-2">{name}</h2>
                <div className="text-purple-500 text-grey-darkest"></div>
    <div className="text-grey-light">{email}</div>
            </div>
            </Link>
        </div>) }
    </>
    )
}

AuthorCard.propTypes = {}

export default AuthorCard
