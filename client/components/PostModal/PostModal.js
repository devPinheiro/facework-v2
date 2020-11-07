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
import { convertArrayToObject } from '../../utils/helper/convertArraytoObject';
import Loader from '../Loader/Loader';

const PostModal = props => {
  const { modalVisibility, setModalVisibility, slug } = props;
    const dispatch = useDispatch();

    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const postState = useSelector(s => s.post);

    useEffect(() => {
         dispatch(fetchPostRequest(slug)); 
    }, []);

    useEffect(() => {
        if(!postState.isLoading){
          setIsLoading(false)
        }
        if(postState.isSuccessful){        
                setPost(convertArrayToObject(postState.data.data));
        }
    }, [postState]);

  return (
   <Modal modalVisibility={modalVisibility}>

  {isLoading ? <Loader /> :
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
        <div className="md:flex w-full border-none">
        <ErrorBoundary>
            <img className="md:w-2/3" src={post && post.data && post.data['featured']} alt=""/>
            <div className="md:w-1/3 md:block">           
                  <div className="flex flex-row justify-between border-b-2 border-grey-lightest px-3 py-4">
                      <div className="flex items-center">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-10 w-10 object-cover" src={post && post.data && post.data['profile']['image']} alt="" />
                              <div className="flex-column ">
  <p className="ml-3 text-sm font-medium  text-grey-dark">{post && post.data && post.data['profile']['name']}</p>
                                <p className="ml-3 text-xs py-1 text-grey-light">{post && post.data['profile']['service']} </p>
                              </div>
                            </Link>
                          </div>
  <span className="relative right text-xl text-dark cursor-pointer" onClick={()=> setModalVisibility(!modalVisibility)}><FiX></FiX></span>
                      </div>
                      
                  <div className="pt-2 px-2 md:h-90 overflow-scroll">
  <div className="text-base text-grey-darker"><p>{post && post.data && post.data['title']}</p></div>
                    <div className="">
                     
                    </div>
                    
                  </div>
                  <div className="-bottom-55">
                  
                    <CreateComment />
                  </div>
              </div>
              </ErrorBoundary>
            </div>  
        </div>}
       
        </Modal>
  ) 
}

export default React.memo(PostModal);
