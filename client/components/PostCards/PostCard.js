import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import ErrorBoundary from '../ErrorBoundary'
import MomentHelper from '../Moment'

// how to make use of the image tag

const PostCard = ({
    title,
    image,
    avatar,
    time,
    description,
    id,
    occupation,
    name,
    setModalVisibility,
    slug,
    profilePage,
    modalVisibility,
    video
}) => {

    const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    // const thumbnailVariants = {
    //     initial: { scale: 0.9, opacity: 0 },
    //     enter: { scale: 1, opacity: 1, transition },
    //     // exit: {
    //     //   scale: 0.5,
    //     //   opacity: 0,
    //     //   transition: { duration: 1.5, ...transition }
    //     // }
    //   };
      
      const frameVariants = {
        hover: { scale: 0.95 }
      };
      
      const imageVariants = {
        hover: { scale: 1.1 }
      };
    return (
        <>
         <ErrorBoundary>
         <motion.div        
                            // variants={thumbnailVariants}
                        >
                            <motion.div
                                className="frame"
                                whileHover="hover"
                                variants={frameVariants}
                                transition={transition}
                            >
            <div className={`${ profilePage ? "object-cover w-full rounded-lg": "max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg my-10"}`}>
                <div className="py-2 flex flex-row items-center justify-between">
                    {profilePage ? null : (<><div className="flex flex-row items-center">
                        <Link
                            to={`/feeds/p/${slug}/${title.toLowerCase()
                                .replace(/ /g,'-')
                                .replace(/[^\w-]+/g,'')}`}
                            className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg"
                        >
                            <img
                                className="rounded-full h-10 w-10 object-cover"
                                src={avatar}
                                alt=""
                            />
                            <div className="flex-column ">
                                <p className="ml-3 text-sm font-medium  text-grey-dark">
                                    {name}
                                </p>
                                <p className="ml-3 text-xs py-1 text-grey-light">
                                    {occupation}
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="text-xs font-semibold text-gray-500">
                            <MomentHelper time={time} />
                        </p>
                    </div></>
                    )}
                </div>
                <div className="mt-2">
                {profilePage ?
                <Link to={`/profile/${title.toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'')}/p/${id}/member_profile_view`}>
                <div className="flex justify-center">
                    { video ? (<video controls src={video} alt="avatar" className="max-h-screen-sm max-w-sm" />) :
                        (<img
                    className="max-h-screen-sm rounded-lg"
                    src={image}
                    alt=""
                    onClick={() => setModalVisibility(!modalVisibility)}
                
                />)}
                </div>
                </Link>
                
           
                :
                    <Link to={`/feeds/p/${slug}/${title.toLowerCase()
                        .replace(/ /g,'-')
                        .replace(/[^\w-]+/g,'')}`}>
                        <div className="flex justify-center">
                        { video ? (<video  controls src={video} alt="avatar" className="max-h-screen-sm max-w-sm" />) : <img
                                className="max-h-screen-sm rounded-lg"
                                src={image}
                                alt=""
                            />}
                        </div>
                        
                    </Link>
                    }
                    
                    <div className="py-2 flex-column items-center">
                        <p className="flex text-sm">{title}</p>
                        { !profilePage &&   <div className="flex flex-row pt-4">
                            <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                <span className="ml-1"></span>
                            </button>
                            <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span className="ml-1"></span>
                            </button>
    </div> }
                    </div>
                </div>
            </div>
            </motion.div>
            </motion.div>
            </ErrorBoundary> 
        </>
    )
}

PostCard.propTypes = {
    articleImage: PropTypes.any,
    theme: PropTypes.any,
    articleTitle: PropTypes.any,
    authorImage: PropTypes.any,
    author: PropTypes.object,
    email: PropTypes.any,
    readTime: PropTypes.any,
    image: PropTypes.any,
    title: PropTypes.string,
    slug: PropTypes.string
}

export default PostCard
