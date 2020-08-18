import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const UserProfile = ({ match }) => {
    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    const imageVariants = {
        exit: { y: '50%', opacity: 0, transition },
        enter: {
            y: '0%',
            opacity: 1,
            transition
        }
    }

    const backVariants = {
        exit: { x: 100, opacity: 0, transition },
        enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
    }
    return (
        <div>
            <motion.div
                className="single"
                initial="exit"
                animate="enter"
                exit="exit"
            >
                <motion.img
                    variants={imageVariants}
                    src={`https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80`}
                    alt="Sammy Dev"
                />
                <motion.div className="text-xl text-black" variants={backVariants}>
                    <Link to="/feeds">← Back</Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default UserProfile;
