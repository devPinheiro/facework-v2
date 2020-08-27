import React from 'react'
import '../../styles/main.css'
import { Link } from 'react-router-dom'
import CreateComment from '../CreateComment'
import Comment from '../Comment'
import ErrorBoundary from '../ErrorBoundary'

// comment fixtures
import data from './fixtures';

import './index.css'
import { FiX } from 'react-icons/fi';
import Modal from '../Modal'

const PostModal = ({ modalVisibility, setModalVisibility }) => {
  return (
   <Modal modalVisibility={modalVisibility}>
<ErrorBoundary>
      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
        <div className="md:flex w-full border-none">
            <img className="md:w-2/3" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt=""/>
            <div className="md:w-1/3 md:block">           
                  <div className="flex flex-row justify-between border-b-2 border-grey-lightest px-3 py-4">
                      <div className="flex items-center">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-10 w-10 object-cover" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="" />
                              <div className="flex-column ">
                                <p className="ml-3 text-sm font-medium  text-grey-dark">Sammy Pinheiro</p>
                                <p className="ml-3 text-xs py-1 text-grey-light">Developer </p>
                              </div>
                            </Link>
                          </div>
  <span className="relative right text-xl text-dark cursor-pointer" onClick={()=> setModalVisibility(!modalVisibility)}><FiX></FiX></span>
                      </div>
                      
                  <div className="pt-2 px-2 md:h-90 overflow-scroll">
                    <div className="text-base text-grey-darker"><p>Presentation of Maryland BillBoard</p></div>
                    <div className="">
                      <ErrorBoundary>
                        {data.map((item, key) => (
                          <Comment {...item} key={key} />
                        ))}
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
