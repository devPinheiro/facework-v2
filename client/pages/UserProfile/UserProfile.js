import React, { useEffect, useState } from 'react'
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
import { flashMessage } from 'redux-flash'

// components
import PostCard from '@components/PostCards/PostCard'
import PostModal from '@components/PostModal/PostModal'
import AuthorCard from '@components/AuthorCard'
import EditProfileModal from '@components/EditProfileModal/EditProfileModal'


// fixtures
import data from '../PostFeeds/fixtures'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfileRequest } from '../../store/actions/fetch-user-profile'
import { logout } from '../../store/actions/auth'
import Button from '../../components/Button'
import { createFollowRequest } from '../../store/actions/follow-user';
import { createUnfollowRequest } from '../../store/actions/unfollow-user';
import followUser from '../../store/reducers/follow-user';
import { editUserProfileRequest } from '../../store/actions/edit-user-profile';




const UserProfile = props => {
    const { history } = props;
    const { id, identifier, userID } = props.match.params
    const [modalVisibility, setModalVisibility] = useState(false)
    const [editProfileModalVisibility, setEditProfileModalVisibility] = useState(false)
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const [userPost, setUserPost] = useState([])
    const [isFollowing, setFollowing] = useState('')
    const [isFollowingSuccessful, setFollowingSuccessful] = useState(false);
    const userProfile = useSelector(state => state.userProfile)
    const followUser = useSelector(state => state.followUser)
    const unFollowUser = useSelector(state => state.unFollowUser)
    const [serverError, setServerError] = useState('')
    
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


    useEffect(() => {
       if(userID){
        dispatch(fetchUserProfileRequest(true, userID));
       } 
    }, []);

    useEffect(() => {
        if(userProfile.isSuccessful){
            setUser(userProfile.data.profile)
            setFollowing(userProfile.data.isFollowing)
            setUserPost(userProfile.data && userProfile.data.posts.data)
        }
    }, [userProfile])



    useEffect(() => {
        if(followUser.isSuccessful){
            setFollowingSuccessful(followUser.data)
            setFollowing(true)
        } else {
            setFollowingSuccessful(false)
        }
    }, [followUser])

    useEffect(() => {
        if(unFollowUser.isSuccessful){
            setFollowingSuccessful(unFollowUser.data)
            setFollowing(false)
        } else {
            setFollowingSuccessful(false)
        }
    }, [unFollowUser])

    const handleUnfollowUser = () => {
        dispatch(createUnfollowRequest(user.id))
    }

    const handleFollowUser = () => {
        dispatch(createFollowRequest(user.id))
    }

      /**
     * Handle feeds form submit
     *
     * @return null
     */
    const onSubmit = (data, { setSubmitting, resetForm}) => {   
            dispatch(editUserProfileRequest(data, user.id))
            .then(() => { 
                dispatch(flashMessage('Profile updated successfully'))     
                setModalVisibility(false)
                setSubmitting(false)
                // resetForm(initialValues)
            })
            .catch(({ error }) => {
                setServerError('Something went wrong, check your network and please try again')
                setSubmitting(false)
            })
    }

    return (
        
        <> 
        
        <div>
            { id && identifier &&
            <PostModal
                modalVisibility={modalVisibility}
                setModalVisibility={closeModal}
                slug={id}
                identifier={identifier}
            /> }         
        
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
                    <AuthorCard profile={true} {...user} />
                    {userID && (isFollowing ? <Button click={handleUnfollowUser}>Unfollow</Button> : <Button click={handleFollowUser}>Follow</Button>)}

                    <div className="pt-6 flex flex-col w-full">
                        <div className="flex flex-row justify-between py-2">
                        
                            <p className=" text-sm">
                                {' '}
                                <span className="px-2 -mb-1">
                                    <FiAlignJustify />{' '}
                                </span>
                                Posts
                            </p>
                            
                           
                        <div>{userPost && userPost.length}{' '}</div>
                        </div>
                        <div className="flex flex-row  justify-between py-2">
                            {' '}
                            <Link to="/messages">
                            <p className=" text-sm">
                                {' '}
                                <span className="px-2 -mb-1">
                                    <FiMessageCircle />{' '}
                                </span>
                                Messages
                            </p>
                            </Link>
                            <div className="bg-red rounded-full notify-badge h-2 w-2"></div>
                        </div>
                       {!userID && <><div className="flex flex-row  justify-between py-2">
                            {' '}
                            
                            <p className=" text-sm" onClick={() => setEditProfileModalVisibility(!editProfileModalVisibility)}>
                                {' '}
                                <span className="px-2 -mb-1">
                                    <FiEdit3 />{' '}
                                </span>
                                Edit Profile
                            </p>
                            
                        </div>
                        <div className="flex flex-row  justify-between py-2">
                            <p className="text-sm" onClick={() => dispatch(logout(history))}>
                                <span className="px-2 -mb-1">
                                    <FiLogOut />{' '}
                                </span>{' '}
                                Log Out
                            </p>
                        </div></>}
                    </div>
                    <div className="pt-4 flex flex-col">
                        <h6 className="md:text-md text-black text-sm py-2">
                            About me
                        </h6>
                        <p className="text-xxs">
                            {user && user.about}
                        </p>
                    </div>

                    <div className="py-4 ">
                        <h6 className="md:text-md text-black text-sm py-2">
                            Social Media
                        </h6>
                        <div className="flex flex-row ">
                            <span className="pr-4">
                                <Link to={user && user.twitter || '#'}>
                                     <FiTwitter />
                                </Link>
                                
                            </span>
                            <span className="pr-4">
                            <Link to={user && user.instagram || '#'}>
                                <FiInstagram />
                                </Link>
                            </span>
                            <span className="pr-4">
                            <Link to={user && user.facebook || '#'}>
                                <FiFacebook />
                                </Link>
                            </span>
                        </div>
                        
                    </div>
                </motion.div>

                <motion.div
                    className="text-xl text-black md:w-3/4 flex justify-between flex-wrap"
                    variants={backVariants}
                >
                    {userPost && userPost.map((item, key) => (
                        <div className="flex max-w-xs mx-2" key={key}>
                            <PostCard
                                title={item.title}
                                image={item.featured}
                                video={item.featured_video}
                                key={key}
                                time={item.created}
                                avatar={item.avatar}
                                name={item.name}
                                slug={item.id}
                                id={item.id}
                                profilePage={true}
                                modalVisibility={modalVisibility}
                                setModalVisibility={setModalVisibility}
                            />
                        </div>
                    ))}
                </motion.div>

                
                
            </motion.div>

              
        </div>
          <EditProfileModal modalVisibility={editProfileModalVisibility}
          setModalVisibility={() => setEditProfileModalVisibility(!editProfileModalVisibility)} initialValues={user} onSubmit={onSubmit} serverError={serverError} />
          </>
    )
}

export default UserProfile
