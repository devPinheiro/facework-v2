import React from 'react'
import { Link } from 'react-router-dom'
import Moment from '../Moment';


const Comment = ({ profile, name, body, created_at }) => {
    return (
        <div>
            <div className="block border-grey-lightest px-1 pt-2"> 
                      <div className="flex flex-wrap justify-between">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-6 w-6 object-cover border-grey-lightest border" src={profile.image} alt="" />
                              <div className="flex-column h-6 ml-2">
                                <p className="text-xxs text-grey-dark mb-1">{profile.name}</p>               
                                <small className="text-xxxs text-grey-light">{<Moment time={created_at} />}</small>               
                              </div>
                            </Link>
    
                        </div>
                        <div className=" py-2"><p className=" text-xs">{body}</p></div>  
            </div>
        </div>
    )
}

export default Comment
