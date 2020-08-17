import React from 'react'
import { Link } from 'react-router-dom'

const NotificationItem = ({link, avatar, title, time }) => {
    return (
        <div className="block border-grey-lightest px-2 py-2 hover:bg-grey-lightest">
                      <div className="flex justify-between">
                            <Link to="#" className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
                            <img class="rounded-full h-10 w-10 object-cover" src={avatar} alt="" />
                              <div className="flex-column ">
                                <p className="ml-3 text-xs font-thin  text-grey-dark">{title}</p>               
                                <small className="ml-3 -mt-2 text-xxs font-thin text-grey-light">{time}</small>               
                              </div>
                            </Link>
                            <div className="px-4 pr-2 flex">
                            <img class="h-12 w-16" src={avatar} alt="" />
                            </div>
                        </div>
            </div>
    )
}

export default NotificationItem
