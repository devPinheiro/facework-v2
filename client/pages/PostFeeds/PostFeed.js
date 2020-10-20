import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

// components
import AuthorCard from '@components/AuthorCard'
import Footer from '@components/Footer'
import PostCard from '@components/PostCards'
import PostModal from '@components/PostModal'
import CreatePost from '@components/CreatePostCard'
// import PropTypes from 'prop-types'

// actions
import { fetchPostsRequest } from '../../store/actions/feeds'

// fixtures
import data from './fixtures'
import ErrorBoundary from '../../components/ErrorBoundary'

const PostFeed = props => {
    const { slug } = props.match.params
    const dispatch = useDispatch();
    const [modalVisibility, setModalVisibility] = useState(false)
    const [postModalVisibility, setPostModalVisibility] = useState(false)
    const closeModal = () => {
        setModalVisibility(!modalVisibility)
        props.history.push('/feeds')
    }

    const [feed, setFeed] = useState([]);
    const feedState = useSelector(s => s.feeds);

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, []);

    useEffect(() => {
        if(feedState.isSuccessful){
            console.log(feedState.data);
        }
    }, [feedState])
    
    return (
        <>
            {' '}
            
                <div className="w-full m-auto max-w-2xl flex ">
                    <div className="w-full md:w-2/3 my-8 mx-4">
                       
                                <CreatePost
                                    postModalVisibility={postModalVisibility}
                                    setPostModalVisibility={
                                        setPostModalVisibility
                                    }
                                />
                                <ErrorBoundary>
                                {data.map((item, key) => (
                                    <PostCard
                                        title={item.title}
                                        image={item.image}
                                        key={key}
                                        time={item.time}
                                        avatar={item.avatar}
                                        name={item.name}
                                        slug={item.slug}
                                        setModalVisibility={setModalVisibility}
                                    />
                                ))}</ErrorBoundary>
                          
                    </div>
                    <div className="hidden md:block md:w-1/3 ">
                        <div className="mx-4 fixed pin-r-3">
                            <AuthorCard />
                        </div>
                    </div>
                </div>
            {slug ? (
                <PostModal
                    modalVisibility={!!slug}
                    setModalVisibility={closeModal}
                />
            ) : null}
            <Footer />
        </>
    )
}

PostFeed.propTypes = {}

export default PostFeed
