import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FiMapPin,
    FiMessageCircle,
    FiLogOut,
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiAlignJustify,
    FiEdit3
} from 'react-icons/fi'

// components
import PostCard from '@components/PostCards/PostCard'
import PostModal from '@components/PostModal/PostModal'

// fixtures
import data from '../PostFeeds/fixtures'

const UserProfile = ({ match }) => {
    const { id } = match.params
    const [modalVisibility, setModalVisibility] = useState(false)
    
    const closeModal = () => {
        setModalVisibility(!modalVisibility)
    }
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

    const backVariants = {
        exit: { x: 100, opacity: 0, transition: { delay: 1, ...transition } },
        enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
    }

    return (
        <div>
          
                <PostModal
                    modalVisibility={modalVisibility}
                    setModalVisibility={closeModal}
                />
            
            <motion.div
                className="w-full m-auto max-w-2xl block sm:flex"
                initial="exit"
                animate="enter"
                exit="exit"
            >
                <motion.div
                    className="md:w-1/4 my-8 mx-4 h-full p-4 shadow-md border-grey-lighter rounded-lg flex flex-col "
                    variants={imageVariants}
                >
                    <div className="flex flex-col items-center">
                        <motion.img
                            className="h-16 w-16 md:h-32 md:w-32 mt-3 rounded-full"
                            variants={imageVariants}
                            src={`https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80`}
                            alt="Sammy Dev"
                        />
                        <div className="py-2 text-center">
                            <h2 className="md:text-lg text-black text-sm py-1">
                                Erin Lindford
                            </h2>
                            <div className="text-purple-500 text-grey-darkest py-2 text-xs">
                                Product Engineer
                            </div>
                            <div className="text-purple-500 text-grey-darkest text-xs">
                                <FiMapPin /> Ikeja, Lagos
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 flex flex-col w-full">
                        <div className="flex flex-row justify-between py-2">
                            <p className=" text-sm">
                                {' '}
                                <span className="px-2 -mb-1">
                                    <FiAlignJustify />{' '}
                                </span>
                                Posts
                            </p>
                            15{' '}
                        </div>
                        <div className="flex flex-row  justify-between py-2">
                            {' '}
                            <p className=" text-sm">
                                {' '}
                                <span className="px-2 -mb-1">
                                    <FiMessageCircle />{' '}
                                </span>
                                Chats
                            </p>
                            <div className="bg-red rounded-full notify-badge h-2 w-2"></div>
                        </div>
                        <div className="flex flex-row  justify-between py-2">
                            {' '}
                            <p className=" text-sm">
                                {' '}
                                <span className="px-2 -mb-1">
                                    <FiEdit3 />{' '}
                                </span>
                                Edit Profile
                            </p>
                        </div>
                        <div className="flex flex-row  justify-between py-2">
                            <p className="text-sm">
                                <span className="px-2 -mb-1">
                                    <FiLogOut />{' '}
                                </span>{' '}
                                Log Out
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-col">
                        <h6 className="md:text-md text-black text-sm py-2">
                            About me
                        </h6>
                        <p className="text-xxs">
                            Realm was designed and built from scratch to support
                            mobile devices and even wearables. It's designed as
                            an object-oriented database and this makes it up to
                            10x faster than SQLite.{' '}
                        </p>
                    </div>

                    <div className="py-4 ">
                        <h6 className="md:text-md text-black text-sm py-2">
                            Social Media
                        </h6>
                        <div className="flex flex-row ">
                            <span className="pr-4">
                                <FiTwitter />
                            </span>
                            <span className="pr-4">
                                <FiInstagram />
                            </span>
                            <span className="pr-4">
                                <FiFacebook />
                            </span>
                        </div>
                        
                    </div>
                </motion.div>

                <motion.div
                    className="text-xl text-black md:w-3/4 flex justify-between flex-wrap"
                    variants={backVariants}
                >
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
                                id={item.slug}
                                profilePage={true}
                                modalVisibility={modalVisibility}
                                setModalVisibility={setModalVisibility}
                            />
                        </div>
                    ))}
                </motion.div>
                
            </motion.div>
        </div>
    )
}

export default UserProfile
