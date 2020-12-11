import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { flashMessage } from 'redux-flash'

// components
import AuthorCard from '@components/AuthorCard'
import Footer from '@components/Footer'
import PostCard from '@components/PostCards'
import PostModal from '@components/PostModal'
import Button from '@components/Button'
import Loader from '@components/Loader'
import CreatePost from '@components/CreatePostCard'
// import PropTypes from 'prop-types'

// actions
import { fetchPostsRequest } from '../../store/actions/feeds';

// fixtures
// import data from './fixtures'
import ErrorBoundary from '../../components/ErrorBoundary';
import { createPostSchema } from '../../validation-schemas'
import { createPostRequest, uploadToCloudinary } from '../../store/actions/create-post'
import { setCurrentUser } from '../../store/actions/auth'
import { fetchUserProfileRequest } from '../../store/actions/fetch-user-profile'

const PostFeed = props => {
    // internal states
    const { slug } = props.match.params
    const dispatch = useDispatch();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [postModalVisibility, setPostModalVisibility] = useState(false);
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(2);
    const [isLoading, setIsLoading] = useState(true);
    const [initialValues, setInitialValues] = useState({title: '', body: '', image: '', selectedImage: '', featured: '', selectedVideo: '', featured_video: ''})
    const [pictureError, setPictureError] = useState('')
    const [serverError, setServerError] = useState('')
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedVideo, setSelectedVideo] = useState('')

    // useSelectors
    const feedState = useSelector(s => s.feeds);
    const authState = useSelector(s => s.userProfile.data);

    // useEffects
    useEffect(() => {
        if(!slug)dispatch(fetchPostsRequest()); 
    }, []);

    useEffect(() => {
        if(feedState.isSuccessful){        
            if(feedState.currentPage > 1 && feedState.lastPage){
                setFeed(prevState => [...prevState, ...feedState.data])
            } else {
                setFeed(feedState.data);
            }
            setIsLoading(false);
        }
        
    }, [feedState])

    // functions
    const loadMorePosts = () => {
        setPage(page + 1);
        dispatch(fetchPostsRequest(page));
    }

    const closeModal = () => {
        setModalVisibility(!modalVisibility)
        props.history.push('/feeds')
    }


     /**
     * Handle registration form submit
     *
     * @return null
     */
    const onSubmit = (data, { setSubmitting, setErrors, resetForm}) => {
      
        let secureUrl;
        if(data.selectedVideo){
            dispatch(uploadToCloudinary(data.selectedVideo)).then(res =>{
             
                secureUrl = res.payload.data.secure_url
                dispatch(createPostRequest({...data, featured_video: secureUrl}))
                    .then(response => { 
                        if(response.payload.data.message || response.payload.data.error){
                            setServerError('Something went wrong, check your network and please try again')
                            setSubmitting(false)
                        }else{
                            dispatch(flashMessage('Post created successfully'))
                            dispatch(fetchPostsRequest())
                            setPostModalVisibility(false)
                            setSubmitting(false)
                            resetForm(initialValues)
                            setSelectedVideo('')
                        }
                    })
            })

            
        } else {
            dispatch(createPostRequest(data))
            .then(response => { 
                  if(response.payload.data.message || response.payload.data.error){
                    setServerError('Something went wrong, check your network and please try again')
                    setSubmitting(false)
                }else{
                    dispatch(flashMessage('Post created successfully'))
                    dispatch(fetchPostsRequest())
                    setPostModalVisibility(false)
                    setSubmitting(false)
                    resetForm(initialValues)
                    setSelectedImage('')
                }
            })
        }
       
      
           
    }
    return (
        <div className="h-full">
         <ErrorBoundary>
            {' '}
            
                <div className="w-full m-auto max-w-xl flex ">
                    <div className="w-full md:w-2/3 my-8 mx-4 ">
                       
                            <CreatePost
                                postModalVisibility={postModalVisibility}
                                setPostModalVisibility={
                                    setPostModalVisibility
                                }
                                onSubmit={onSubmit}
                                initialValues={initialValues}
                                createPostSchema={createPostSchema}
                                pictureError={pictureError}
                                setPictureError={setPictureError}
                                serverError={serverError}
                                selectedImage={selectedImage}
                                selectedVideo={selectedVideo}
                                setSelectedImage={setSelectedImage}
                                setSelectedVideo={setSelectedVideo}
                                />
                               
                                { isLoading ? <div className="m-auto h-64 my-32 py-32"><Loader /> </div> : feed.map((item, key) => (
                                    <PostCard
                                        title={item.title}
                                        image={item.featured}
                                        video={item.featured_video}
                                        key={key}
                                        time={item.created_at}
                                        avatar={item.profile && item.profile.image}
                                        name={item.profile && item.profile.name}
                                        occupation={item.profile && item.profile.service}
                                        slug={item.id}
                                        setModalVisibility={setModalVisibility}
                                    />
                                ))}
                                {feedState.nextPage &&  <Button type="button"
                                style="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow mr-4" click={loadMorePosts}>Load More</Button>}
                          
                    </div>
                    <div className="hidden md:block md:w-1/3 ">
                        <div className="mx-4 fixed pin-r-3">
                            <AuthorCard {...(authState && authState.user)} />
                        </div>
                    </div>
                </div>
            {slug ? (
                <PostModal
                    modalVisibility={!!slug}
                    setModalVisibility={closeModal}
                    slug={slug}
                />
            ) : null}
            <div className="pin-y">
                 <Footer />
            </div>
            </ErrorBoundary>
        </div>
    )
}

PostFeed.propTypes = {}

export default PostFeed
