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
import { createPostRequest } from '../../store/actions/create-post'

const PostFeed = props => {
    // internal states
    const { slug } = props.match.params
    const dispatch = useDispatch();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [postModalVisibility, setPostModalVisibility] = useState(false);
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(2);
    const [isLoading, setIsLoading] = useState(true);
    const [initialValues, setInitialValues] = useState({title: '', body: '', image: '', selectedImage: '', featured: ''})
    const [pictureError, setPictureError] = useState('')
    const [serverError, setServerError] = useState('')

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

    const imageHandler = e => {
        // get the file uploaded
        const files = e.target.files;
    
        //check if file exist
        if (files && files[0]) {
          // check if file type is any image format
    
          /* istanbul ignore next */
          if (files[0].size > 2028643) {
            /* istanbul ignore next */
            setMediaError('Please select an image less than 1mb.');
          }
          setInitialValues({...initialValues, image: files[0]});
          // initializes file reader
          /* istanbul ignore next */
          const reader = new FileReader();
          /* istanbul ignore next */
          reader.onload = e => {
            // extract the image file and set it to state
            /* istanbul ignore next */
            setInitialValues({...initialValues, selectedImage: e.target.result});
          };
          /* istanbul ignore next */
          reader.readAsDataURL(files[0]);
        }
      };


     /**
     * Handle registration form submit
     *
     * @return null
     */
   const onSubmit = (data, { setSubmitting, setErrors, resetForm}) => {

        dispatch(createPostRequest(data))
            .then(response => { 
                  if(response.payload.data.message){
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
                                imageHandler={imageHandler}
                                pictureError={pictureError}
                                setPictureError={setPictureError}
                                serverError={serverError}
                                />
                               
                                { isLoading ? <div className="m-auto h-64 my-32 py-32"><Loader /> </div> : feed.map((item, key) => (
                                    <PostCard
                                        title={item.title}
                                        image={item.featured}
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
