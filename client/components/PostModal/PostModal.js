import React from 'react'
import '../../styles/main.css'
import { Link } from 'react-router-dom'

const PostModal = ({ modalVisibility, setModalVisibility }) => {
  return (
    <div className={ `${modalVisibility ? 'modal-cover modal-cover-active ' : 'modal-container'}`} onClick={() => setModalVisibility(!modalVisibility)}>

      <div className="modal-container-active modal-container md:max-w-xl max-w-md-1/2">
        <div className="md:flex w-full border-none">
            <img className="md:w-2/3" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt=""/>
            <div className="md:w-1/3 md:block">           
                  <div className="flex flex-row border-b-2 border-grey-lightest px-3 py-4">
                      <div className="flex items-center">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-10 w-10 object-cover" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="" />
                              <div className="flex-column ">
                                <p className="ml-3 text-sm font-medium  text-grey-dark">Sammy Pinheiro</p>
                                <p className="ml-3 text-xs py-1 text-grey-light">Developer </p>
                              </div>
                            </Link>
                          </div>
                      </div>
                  <div className="py-4 px-2">
                    <p>Presentation of Maryland BillBoard</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
  ) 
}

export default React.memo(PostModal);
