import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/main.css'
import { Link } from 'react-router-dom'



// comment fixtures
import data from './fixtures';

// component
import './index.css'
import { FiX } from 'react-icons/fi';
import Modal from '../Modal'
import { fetchPostRequest } from '../../store/actions/fetch-single-post'
import CreateComment from '../CreateComment'
import Comment from '../Comment'
import ErrorBoundary from '../ErrorBoundary'

const PostModal = props => {
  const { modalVisibility, setModalVisibility, slug } = props;
    const dispatch = useDispatch();

    const [post, setPost] = useState([]);
    const postState = useSelector(s => s.post);

    useEffect(() => {
         dispatch(fetchPostRequest(slug)); 
    }, []);

    useEffect(() => {
        if(postState.isSuccessful){        
                setPost(postState.data.data);
                
        }
    }, [postState]);

    console.log(post[0]);
  return (
   <Modal modalVisibility={modalVisibility}>
<ErrorBoundary>
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
        <div className="md:flex w-full border-none">
            <img className="md:w-2/3" src={post.featured} alt=""/>
            <div className="md:w-1/3 md:block">           
                  <div className="flex flex-row justify-between border-b-2 border-grey-lightest px-3 py-4">
                      <div className="flex items-center">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-10 w-10 object-cover" src={post.profile && post.profile.image} alt="" />
                              <div className="flex-column ">
  <p className="ml-3 text-sm font-medium  text-grey-dark">{post.profile && post.profile.name}</p>
                                <p className="ml-3 text-xs py-1 text-grey-light">{post.profile && post.profile.service} </p>
                              </div>
                            </Link>
                          </div>
  <span className="relative right text-xl text-dark cursor-pointer" onClick={()=> setModalVisibility(!modalVisibility)}><FiX></FiX></span>
                      </div>
                      
                  <div className="pt-2 px-2 md:h-90 overflow-scroll">
  <div className="text-base text-grey-darker"><p>{post && post.title}</p></div>
                    <div className="">
                      <ErrorBoundary>
                        {/* {post && post.comments.map((item, key) => (
                          <Comment {...item} key={key} />
                        ))} */}
                      </ErrorBoundary>
                    </div>
                    
                  </div>
                  <div className="-bottom-55">
                  
                    <CreateComment />
                  </div>
              </div>
            </div>
        </div>
        </ErrorBoundary>
        </Modal>
  ) 
}

export default React.memo(PostModal);
