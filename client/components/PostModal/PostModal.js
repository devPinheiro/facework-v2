import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/main.css'
import { Link } from 'react-router-dom'
import { flashMessage } from 'redux-flash'



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
import { createCommentRequest } from '../../store/actions/create-comment';
import { CreateCommentSchema } from '@client/validation-schemas'

const PostModal = props => {
    const { modalVisibility, setModalVisibility, slug } = props;
    const dispatch = useDispatch();

    const [post, setPost] = useState({});
    const [value, setValue] = useState('');
    const [comments, setComment] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [resetCommentForm, setResetCommentForm] = useState(false);
    const postState = useSelector(s => s.post);
    const createCommentState = useSelector(s => s.comment);

    useEffect(() => {
         dispatch(fetchPostRequest(slug)); 
    }, []);

    useEffect(() => {    
        if(postState.isSuccessful){        
                setPost(postState.data.post);
                setComment(postState.data.comments)       
                setIsLoading(false)
        }

        
    }, [postState]);


    useEffect(()=>{
      if(createCommentState.isSuccessful && !createCommentState.isLoading){
        setResetCommentForm(false)
        setValue('')
        dispatch(fetchPostRequest(slug));
      }
    }, [createCommentState])

    const handleOnSubmit = (data, { setSubmitting, setErrors, setValues, resetForm }) => {
      const payload = {
        body: data.body,
        post_id: post.id,
        profile_id: post.profile.id
      } 
      dispatch(createCommentRequest(payload))
           .then(response => {
        console.log(response.payload.data);
        if(response.payload.data){
          dispatch(flashMessage('Successfully registered.'))
          setValues('')
          resetForm()
        }     
    })
    .catch(({ error }) => {
        setSubmitting(false)
        // setErrors(error.response.data.errors)
        dispatch(
            flashMessage('Something went wrong', {
                isError: true
            })
        )
    })
    }

  return (
   <Modal modalVisibility={modalVisibility}>

  {isLoading ? <div className="m-auto h-64 my-32 py-32"><Loader /> </div> :
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
        <div className="md:flex w-full border-none">
        <ErrorBoundary>
          <div className="flex md:w-2/3 justify-center">
          <img className="max-h-screen-md" src={post.featured} alt=""/>
          </div>
            
            <div className="md:w-1/3 md:block border-l-2 border-grey-lightest">           
                  <div className="flex flex-row justify-between border-b-2 border-grey-lightest px-3 py-4">
                      <div className="flex items-center">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-10 w-10 object-cover" src={post.profile.image} alt="" />
                              <div className="flex-column ">
                                <p className="ml-3 text-sm font-medium  text-black">{post.profile.name}</p>
                                <p className="ml-3 text-xs py-1 text-grey-light">{post.profile.service} </p>
                              </div>
                            </Link>
                          </div>
                          <span className="relative right text-xl text-dark cursor-pointer" onClick={()=> setModalVisibility(!modalVisibility)}><FiX></FiX></span>
                      </div>
                      
                  <div className="pt-2 px-2 md:h-90 overflow-scroll">
                 <div className="text-base text-black"><p>{post.title}</p></div>
                 <small className="text-xxs font-hairline">{post.body} </small> 
                    <div className="">
                     {comments && comments.reverse().map((item, key) => (
                            <Comment {...item} key={key} />
                        ))}	                       
                    </div>
                    
                  </div>
                  <div className="-bottom-55">
                  
                    <CreateComment onSubmit={handleOnSubmit} initialValues={value} handleChange={e => setValue(e.target.value)} validationSchema={CreateCommentSchema} resetCommentForm={resetCommentForm} />
                  </div>
              </div>
              </ErrorBoundary>
            </div>  
        </div>}
       
        </Modal>
  ) 
}

export default React.memo(PostModal);
