import React from 'react'
import { Link } from 'react-router-dom'


const Comment = ({ avatar, name, comment, time }) => {
    return (
        <div>
            <div className="block border-grey-lightest px-1 pt-2">
                      <div className="flex flex-wrap justify-between">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-6 w-6 object-cover" src={avatar} alt="" />
                              <div className="flex-column ">
                                <p className="ml-3 text-xs font-thin  text-grey-dark">{name}</p>               
                                <small className="ml-3 -mt-2 text-xxs font-thin text-grey-light">{time}</small>               
                              </div>
                            </Link>
    
                        </div>
                        <div className=" py-2"><p className="text-xxs font-hairline">{comment}</p></div>  
            </div>
        </div>
    )
}

export default Comment
