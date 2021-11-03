import React from 'react'
import { Link } from 'react-router-dom'
import Moment from '../Moment';
import Button from '../Button';


const Follow = ({ profile, handleFollowUser, isFollowing }) => {
    return (
        <div>
            <div className="block border-grey-lightest px-1 pt-2"> 
                      <div className="flex flex-wrap justify-between">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img className="rounded-full h-6 w-6 object-cover border-grey-lightest border" src={profile.image} alt="" />
                              <div className="flex-column h-6 ml-2">
                                <p className="text-xxs text-grey-dark mb-1">{profile.name}</p>               
                                              
                              </div>
                            </Link>
    
                        </div>
                        <div className=" py-2">
                            <Button>Follow</Button>
                        </div>  
            </div>
        </div>
    )
}

export default Follow;
