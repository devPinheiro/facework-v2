import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// components
import PostCard from '@components/PostCards/PostCard'
import PostModal from '@components/PostModal/PostModal'

// fixtures
import data from '../PostFeeds/fixtures'


const UserProfile = ({ match }) => {

    const { slug } = match.params
    const [modalVisibility, setModalVisibility] = useState(false)

    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    const imageVariants = {
        exit: { y: '50%', opacity: 0.5, transition: { delay: 1, ...transition } },
        enter: {
            y: '0%',
            opacity: 1,
            transition
        }
    }

    const backVariants = {
        exit: { x: 100, opacity: 0, transition: { delay: 1, ...transition }  },
        enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
    }
    return (
        <div>
            <motion.div
                className="w-full m-auto max-w-2xl flex"
                initial="exit"
                animate="enter"
                exit="exit"
            >
                <motion.div className="md:w-1/4 my-8 mx-4 h-90 p-4 shadow-md border-grey-lighter rounded-lg flex flex-col items-center" variants={imageVariants}>
                    <motion.img
                        className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                        variants={imageVariants}
                        src={`https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80`}
                        alt="Sammy Dev"
                    />
                    <div className="py-2">
                        <h2 className="md:text-lg text-black text-sm py-1">Erin Lindford</h2>
                        <div className="text-purple-500 text-grey-darkest text-sm">Product Engineer</div>
                        
                    </div>
                </motion.div>

                <motion.div className="text-xl text-black md:w-3/4 flex justify-between flex-wrap" variants={backVariants}>
                {data.map((item, key) => (
                                    <div className="w-64">
                                        <PostCard
                                        title={item.title}
                                        image={item.image}
                                        key={key}
                                        time={item.time}
                                        avatar={item.avatar}
                                        name={item.name}
                                        slug={item.slug}
                                        profilePage={true}
                                        setModalVisibility={setModalVisibility}
                                    />
                                    </div>
                                ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default UserProfile;
